import { create } from "zustand";
import { getSocket } from "../lib/socket";

interface SocketStore {
  isConnected: Record<string, boolean>;
  connect: (namespace: string, projectId?: string) => void;
  disconnect: (namespace: string) => void;
}

export const useSocketStore = create<SocketStore>((set, get) => ({
  isConnected: {},

  connect: (namespace, projectId) => {
    const socket = getSocket(namespace);

    if (get().isConnected[namespace] === undefined) {
      set((s) => ({
        isConnected: { ...s.isConnected, [namespace]: socket.connected },
      }));

      socket.on("connect", () =>
        set((s) => ({ isConnected: { ...s.isConnected, [namespace]: true } })),
      );
      socket.on("disconnect", () =>
        set((s) => ({ isConnected: { ...s.isConnected, [namespace]: false } })),
      );
    }

    if (projectId) {
      const currentQuery = socket.io.opts.query as any;
      if (currentQuery?.projectId !== projectId) {
        if (socket.connected) {
          socket.disconnect();
        }
        socket.io.opts.query = { ...currentQuery, projectId };
      }
    }

    if (!socket.connected) {
      socket.connect();
    }
  },

  disconnect: (namespace) => {
    const socket = getSocket(namespace);
    if (socket.connected) {
      socket.disconnect();
    }
  },
}));
