import { Socket, Namespace } from "socket.io";
import chokidar, { FSWatcher } from "chokidar";
import { handleEditorSocketEvents } from "./handlers/editor";

export const handleEditorNamespace = (namespace: Namespace) => {
  namespace.on("connection", (socket: Socket) => {
    console.log("User connected to editor", socket.id);

    const projectId = socket.handshake.query.projectId as string;
    console.log(`User connected to editor namespace. Project ID: ${projectId || "None"}`);

    let watcher: FSWatcher | null = null;

    if (projectId) {
      socket.join(projectId);
      console.log(`Initializing file watcher for project: ${projectId}`);
      watcher = chokidar.watch(`./projects/${projectId}`, {
        ignored: (path) => path.includes("node_modules"), // Ignore node_modules directory
        persistent: true, // Keep the watcher in running state till the time the server is running
        ignoreInitial: true, // Don't emit events for files that already exist when the watcher is created
        awaitWriteFinish: {
          stabilityThreshold: 2000, // Wait for 2 seconds after the last write event to emit the event
        },
      });

      watcher.on("all", (event, path) => {
        console.log(`File event [${event}]: ${path}`);
      });
    } else {
      console.warn("No projectId provided in socket handshake query.");
    }

    handleEditorSocketEvents(socket);

    socket.on("disconnect", async () => {
      if (watcher) {
        await watcher.close();
        console.log(`Watcher closed for project: ${projectId}`);
      }
      console.log("User disconnected from editor", socket.id);
    });
  });
};
