import { Socket } from "socket.io";

/**
 * Creates a higher-order function to handle socket events with common validation and error handling.
 * @param socket The socket instance to emit errors to.
 * @param projectId The project ID for validation.
 * @returns A function that takes an event name and a handler, returning a socket-compatible callback.
 */
export const createSocketHandler = (socket: Socket, projectId?: string) => {
  return <T>(eventName: string, handler: (payload: T) => Promise<void>) => {
    return async (payload: T) => {
      try {
        if (!projectId) throw new Error("Project ID is required");
        await handler(payload);
      } catch (error: any) {
        console.error(`Error during ${eventName}:`, error);
        socket.emit(`${eventName}Error`, error);
      }
    };
  };
};
