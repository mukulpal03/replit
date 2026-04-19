import { useEffect } from "react";
import { editorSocket } from "../lib/socket";
import { useEditorSocketStore } from "../store/editorSocketStore";
import { useEditorTabsStore } from "../store/editorTabsStore";

export const useEditorSocket = (projectId: string | undefined) => {
  const isConnected = useEditorSocketStore((s) => s.isConnected);
  const connect = useEditorSocketStore((s) => s.connect);
  const disconnect = useEditorSocketStore((s) => s.disconnect);
  const addTab = useEditorTabsStore((s) => s.addTab);

  useEffect(() => {
    if (projectId) {
      connect(projectId);
    }

    return () => {
      disconnect();
    };
  }, [projectId, connect, disconnect]);

  useEffect(() => {
    const handleReadFileSuccess = ({
      data,
      pathToFileOrDir,
    }: {
      data: string;
      pathToFileOrDir: string;
    }) => {
      const label = pathToFileOrDir.split("/").pop() || "Untitled";
      addTab({
        id: pathToFileOrDir,
        label,
        content: data,
      });
    };

    const handleFileUpdated = ({
      pathToFileOrDir,
      data,
    }: {
      pathToFileOrDir: string;
      data: string;
    }) => {
      const tabs = useEditorTabsStore.getState().tabs;
      if (tabs.find((t) => t.id === pathToFileOrDir)) {
        useEditorTabsStore.getState().updateTabContent(pathToFileOrDir, data);
      }
    };

    const handleWriteFileSuccess = () => {
      console.log("File saved successfully.");
    };

    editorSocket.on("readFileSuccess", handleReadFileSuccess);
    editorSocket.on("fileUpdated", handleFileUpdated);
    editorSocket.on("writeFileSuccess", handleWriteFileSuccess);

    return () => {
      editorSocket.off("readFileSuccess", handleReadFileSuccess);
      editorSocket.off("fileUpdated", handleFileUpdated);
      editorSocket.off("writeFileSuccess", handleWriteFileSuccess);
    };
  }, [addTab]);

  const readFile = (path: string) => {
    editorSocket.emit("readFile", { pathToFileOrDir: path });
  };

  const writeFile = (path: string, content: string) => {
    editorSocket.emit("writeFile", { pathToFileOrDir: path, data: content });
  };

  return { socket: editorSocket, isConnected, readFile, writeFile };
};
