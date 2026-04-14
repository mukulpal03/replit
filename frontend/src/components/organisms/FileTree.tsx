import { FileTreeNode } from '../molecules/FileTreeNode'
import type { DirectoryNode } from '../../types/project'

interface FileTreeProps {
  root: DirectoryNode
  onFileClick?: (node: DirectoryNode) => void
}

export const FileTree = ({ root, onFileClick }: FileTreeProps) => (
  <div className="h-full overflow-y-auto py-2 text-sm">
    {root.children?.map((node) => (
      <FileTreeNode key={node.name} node={node} onFileClick={onFileClick} />
    ))}
  </div>
)
