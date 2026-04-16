import { io, Socket } from "socket.io-client";

const API_URL =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000/api";
const BASE_SOCKET_URL = API_URL.replace("/api", "");

const sockets: Record<string, Socket> = {};

export const getSocket = (namespace: string = "/"): Socket => {
  const nsp = namespace.startsWith("/") ? namespace : `/${namespace}`;

  if (!sockets[nsp]) {
    sockets[nsp] = io(`${BASE_SOCKET_URL}${nsp === "/" ? "" : nsp}`, {
      autoConnect: false,
      transports: ["websocket"],
    });
  }

  return sockets[nsp];
};
