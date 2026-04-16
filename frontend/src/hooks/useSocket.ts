import { useEffect } from "react";
import { socket } from "../lib/socket";
import { useSocketStore } from "../store/socketStore";

export const useSocket = () => {
  const { isConnected } = useSocketStore();
  return { socket, isConnected };
};

export const useProjectSocket = (projectId: string | undefined) => {
  const { isConnected, connect, disconnect } = useSocketStore();

  useEffect(() => {
    if (projectId) {
      connect(projectId);
    }

    return () => {
      disconnect();
    };
  }, [projectId, connect, disconnect]);

  return { socket, isConnected };
};

