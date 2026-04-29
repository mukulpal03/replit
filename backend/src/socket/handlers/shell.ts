import { Socket } from "socket.io";
import { createSocketHandler } from "../utils";

export const handleShellSocketEvents = (socket: Socket, stream: any) => {
  const projectId = socket.handshake.query.projectId as string;
  const handleEvent = createSocketHandler(socket, projectId);

  // Listen for data from the container stream and send it to the client
  stream.on("data", (data: Buffer) => {
    socket.emit("terminalData", data.toString());
  });

  // Listen for data from the client (terminal input) and write it to the container stream
  // We limit terminal input to 50 events per second to prevent spamming the container
  socket.on(
    "terminalData",
    handleEvent<string>("terminalData", async (data: string) => {
      stream.write(data);
    }, { rateLimit: { max: 50, windowMs: 1000 } })
  );

  socket.on("disconnect", () => {
    stream.end();
  });
};
