import { useEffect } from "react";
import { getSocket } from "../lib/socket";
import { useSocketStore } from "../store/socketStore";

export const useSocket = (namespace: string = "/") => {
  const isConnected = useSocketStore((s) => !!s.isConnected[namespace]);
  const socket = getSocket(namespace);
  return { socket, isConnected };
};

export const useEditorSocket = (projectId: string | undefined) => {
  const namespace = "/editor";

  const connect = useSocketStore((s) => s.connect);
  const disconnect = useSocketStore((s) => s.disconnect);
  const isConnected = useSocketStore((s) => !!s.isConnected[namespace]);

  const socket = getSocket(namespace);

  useEffect(() => {
    if (projectId) {
      connect(namespace, projectId);
    }

    return () => {
      disconnect(namespace);
    };
  }, [projectId, connect, disconnect]);

  return { socket, isConnected };
};
