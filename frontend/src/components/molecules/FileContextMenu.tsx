import type { DirectoryNode } from "../../types/project";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../ui/context-menu";

interface FileContextMenuProps {
  node: DirectoryNode;
  children: React.ReactNode;
  onAction?: (action: 'rename' | 'createFile' | 'createFolder' | 'delete', node: DirectoryNode) => void;
}

export const FileContextMenu = ({ node, children, onAction }: FileContextMenuProps) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent>
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
