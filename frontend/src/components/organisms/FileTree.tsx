import { useState } from 'react'
import { FileTreeNode } from '../molecules/FileTreeNode'
import type { DirectoryNode } from '../../types/project'

interface FileTreeProps {
  root: DirectoryNode
  onFileClick?: (node: DirectoryNode) => void
}

export const FileTree = ({ root, onFileClick }: FileTreeProps) => {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({})

  const toggleFolder = (nodePath: string) =>
    setOpenFolders((prev) => ({ ...prev, [nodePath]: !prev[nodePath] }))

  return (
    <div className="h-full overflow-y-auto py-2 text-sm">
      {root.children?.map((node) => (
        <FileTreeNode
          key={node.name}
          node={node}
          nodePath={node.name}
          openFolders={openFolders}
          onToggle={toggleFolder}
          onFileClick={onFileClick}
        />
      ))}
    </div>
  )
}
