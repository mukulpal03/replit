import { create } from "zustand";
import { socket } from "../lib/socket";

interface SocketState {
  isConnected: boolean;
  connect: (projectId: string) => void;
  disconnect: () => void;
}

export const useSocketStore = create<SocketState>((set) => {
  socket.on("connect", () => set({ isConnected: true }));
  socket.on("disconnect", () => set({ isConnected: false }));

  return {
    isConnected: socket.connected,
    connect: (projectId: string) => {
      if (
        socket.connected &&
        (socket.io.opts.query as any)?.projectId !== projectId
      ) {
        socket.disconnect();
      }

      // Update the handshake query and connect
      socket.io.opts.query = { projectId };
      socket.connect();
    },
    disconnect: () => {
      socket.disconnect();
    },
  };
});
