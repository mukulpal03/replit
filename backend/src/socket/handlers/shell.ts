import { Socket } from "socket.io";

export const handleShellSocketEvents = (socket: Socket, stream: any) => {
  // Listen for data from the container stream and send it to the client
  stream.on("data", (data: Buffer) => {
    socket.emit("terminalData", data.toString());
  });

  // Listen for data from the client (terminal input) and write it to the container stream
  socket.on("terminalData", (data: string) => {
    stream.write(data);
  });

  socket.on("disconnect", () => {
    stream.end();
  });
};
