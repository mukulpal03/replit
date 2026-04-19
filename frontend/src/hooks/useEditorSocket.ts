import { useEffect } from "react";
import { editorSocket } from "../lib/socket";
import { useEditorSocketStore } from "../store/editorSocketStore";
import { useEditorTabsStore } from "../store/editorTabsStore";
import { useQueryClient } from "@tanstack/react-query";

export const useEditorSocket = (projectId: string | undefined) => {
  const isConnected = useEditorSocketStore((s) => s.isConnected);
  const connect = useEditorSocketStore((s) => s.connect);
  const disconnect = useEditorSocketStore((s) => s.disconnect);
  const addTab = useEditorTabsStore((s) => s.addTab);
  const queryClient = useQueryClient();

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

    const handleTreeUpdated = () => {
      queryClient.invalidateQueries({ queryKey: ["directory-tree"] });
    };

    editorSocket.on("readFileSuccess", handleReadFileSuccess);
    editorSocket.on("fileUpdated", handleFileUpdated);
    editorSocket.on("writeFileSuccess", handleWriteFileSuccess);
    editorSocket.on("treeUpdated", handleTreeUpdated);
    editorSocket.on("createFileSuccess", handleTreeUpdated);
    editorSocket.on("createDirectorySuccess", handleTreeUpdated);
    editorSocket.on("renameFileSuccess", handleTreeUpdated);
    editorSocket.on("renameDirectorySuccess", handleTreeUpdated);
    editorSocket.on("deleteFileSuccess", handleTreeUpdated);
    editorSocket.on("deleteDirectorySuccess", handleTreeUpdated);

    return () => {
      editorSocket.off("readFileSuccess", handleReadFileSuccess);
      editorSocket.off("fileUpdated", handleFileUpdated);
      editorSocket.off("writeFileSuccess", handleWriteFileSuccess);
      editorSocket.off("treeUpdated", handleTreeUpdated);
      editorSocket.off("createFileSuccess", handleTreeUpdated);
      editorSocket.off("createDirectorySuccess", handleTreeUpdated);
      editorSocket.off("renameFileSuccess", handleTreeUpdated);
      editorSocket.off("renameDirectorySuccess", handleTreeUpdated);
      editorSocket.off("deleteFileSuccess", handleTreeUpdated);
      editorSocket.off("deleteDirectorySuccess", handleTreeUpdated);
    };
  }, [addTab, queryClient]);

  const readFile = (path: string) => {
    editorSocket.emit("readFile", { pathToFileOrDir: path });
  };

  const writeFile = (path: string, content: string) => {
    editorSocket.emit("writeFile", { pathToFileOrDir: path, data: content });
  };

  return { socket: editorSocket, isConnected, readFile, writeFile };
};
