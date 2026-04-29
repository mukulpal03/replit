import path from "path";
import fs from "fs/promises";
import { sanitizePath } from "../../utils/path";
import { Socket } from "socket.io";
import { createSocketHandler } from "../utils";

interface EventPayload {
  data: string;
  pathToFileOrDir: string;
  newPath?: string;
}

export const handleEditorSocketEvents = (socket: Socket) => {
  const projectId = socket.handshake.query.projectId as string;
  const projectBase = path.resolve(process.cwd(), "projects", projectId || "");
  
  const handleEvent = createSocketHandler(socket, projectId);

  socket.on(
    "writeFile",
    handleEvent<EventPayload>("writeFile", async ({ data, pathToFileOrDir }) => {
      const sanitizedPath = sanitizePath(projectBase, pathToFileOrDir);
      await fs.writeFile(sanitizedPath, data);
      socket.emit("writeFileSuccess", { data: "File written successfully" });
      socket.to(projectId).emit("fileUpdated", { pathToFileOrDir, data });
    })
  );

  socket.on(
    "createFile",
    handleEvent<EventPayload>("createFile", async ({ pathToFileOrDir }) => {
      const sanitizedPath = sanitizePath(projectBase, pathToFileOrDir);
      try {
        await fs.writeFile(sanitizedPath, "", { flag: "wx" });
        socket.emit("createFileSuccess", { data: "File created successfully" });
        socket.to(projectId).emit("treeUpdated", { pathToFileOrDir });
      } catch (error: any) {
        if (error.code === "EEXIST") {
          socket.emit("createFileError", { data: "File already exists" });
        } else {
          throw error;
        }
      }
    })
  );

  socket.on(
    "readFile",
    handleEvent<EventPayload>("readFile", async ({ pathToFileOrDir }) => {
      const sanitizedPath = sanitizePath(projectBase, pathToFileOrDir);
      const data = await fs.readFile(sanitizedPath, "utf-8");
      socket.emit("readFileSuccess", { data, pathToFileOrDir });
    })
  );

  socket.on(
    "deleteFile",
    handleEvent<EventPayload>("deleteFile", async ({ pathToFileOrDir }) => {
      const sanitizedPath = sanitizePath(projectBase, pathToFileOrDir);
      await fs.unlink(sanitizedPath);
      socket.emit("deleteFileSuccess", { data: "File deleted successfully" });
      socket.to(projectId).emit("treeUpdated", { pathToFileOrDir });
    })
  );

  socket.on(
    "renameFile",
    handleEvent<EventPayload>("renameFile", async ({ pathToFileOrDir, newPath }) => {
      if (!newPath) throw new Error("newPath is required for rename");
      const sanitizedOldPath = sanitizePath(projectBase, pathToFileOrDir);
      const sanitizedNewPath = sanitizePath(projectBase, newPath);
      await fs.rename(sanitizedOldPath, sanitizedNewPath);
      socket.emit("renameFileSuccess", { data: "File renamed successfully" });
      socket.to(projectId).emit("treeUpdated", { pathToFileOrDir });
    })
  );

  socket.on(
    "createDirectory",
    handleEvent<EventPayload>("createDirectory", async ({ pathToFileOrDir }) => {
      const sanitizedPath = sanitizePath(projectBase, pathToFileOrDir);
      await fs.mkdir(sanitizedPath);
      socket.emit("createDirectorySuccess", { data: "Directory created successfully" });
      socket.to(projectId).emit("treeUpdated", { pathToFileOrDir });
    })
  );

  socket.on(
    "deleteDirectory",
    handleEvent<EventPayload>("deleteDirectory", async ({ pathToFileOrDir }) => {
      const sanitizedPath = sanitizePath(projectBase, pathToFileOrDir);
      await fs.rm(sanitizedPath, { recursive: true });
      socket.emit("deleteDirectorySuccess", { data: "Directory deleted successfully" });
      socket.to(projectId).emit("treeUpdated", { pathToFileOrDir });
    })
  );

  socket.on(
    "renameDirectory",
    handleEvent<EventPayload>("renameDirectory", async ({ pathToFileOrDir, newPath }) => {
      if (!newPath) throw new Error("newPath is required for rename");
      const sanitizedOldPath = sanitizePath(projectBase, pathToFileOrDir);
      const sanitizedNewPath = sanitizePath(projectBase, newPath);
      await fs.rename(sanitizedOldPath, sanitizedNewPath);
      socket.emit("renameDirectorySuccess", { data: "Directory renamed successfully" });
      socket.to(projectId).emit("treeUpdated", { pathToFileOrDir });
    })
  );
};
