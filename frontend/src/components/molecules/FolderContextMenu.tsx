import type { DirectoryNode } from "../../types/project";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "../ui/context-menu";

interface FolderContextMenuProps {
  node: DirectoryNode;
  children: React.ReactNode;
  onAction?: (action: 'rename' | 'createFile' | 'createFolder' | 'delete', node: DirectoryNode) => void;
}

export const FolderContextMenu = ({ node, children, onAction }: FolderContextMenuProps) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={() => onAction?.('createFile', node)}>
          New File
        </ContextMenuItem>
        <ContextMenuItem onClick={() => onAction?.('createFolder', node)}>
          New Folder
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem onClick={() => onAction?.('rename', node)}>
          Rename
        </ContextMenuItem>
        <ContextMenuItem onClick={() => onAction?.('delete', node)} className="text-red-500 focus:text-red-500">
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};
