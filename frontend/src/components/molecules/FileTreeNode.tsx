import { useState } from 'react'
import { ChevronRight, ChevronDown, Folder, FolderOpen, File } from 'lucide-react'
import { cn } from '../../lib/utils'
import type { DirectoryNode } from '../../types/project'

interface FileTreeNodeProps {
  node: DirectoryNode
  depth?: number
  onFileClick?: (node: DirectoryNode) => void
}

export const FileTreeNode = ({ node, depth = 0, onFileClick }: FileTreeNodeProps) => {
  const [isOpen, setIsOpen] = useState(true)
  const isDirectory = Array.isArray(node.children)

  const handleClick = () => {
    if (isDirectory) setIsOpen((prev) => !prev)
    else onFileClick?.(node)
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
        className={cn(
          'flex w-full items-center gap-1.5 py-0.5 pr-2 text-left text-sm',
          'text-muted-foreground hover:bg-muted/60 hover:text-foreground transition-colors',
        )}
      >
        {isDirectory ? (
          isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />
        ) : (
          <span className="w-3.5" />
        )}

        {isDirectory ? (
          isOpen ? <FolderOpen size={14} className="shrink-0 text-yellow-400/80" /> : <Folder size={14} className="shrink-0 text-yellow-400/80" />
        ) : (
          <File size={14} className="shrink-0 text-blue-400/80" />
        )}

        <span className="truncate">{node.name}</span>
      </button>

      {isDirectory && isOpen && node.children?.map((child) => (
        <FileTreeNode
          key={child.name}
          node={child}
          depth={depth + 1}
          onFileClick={onFileClick}
        />
      ))}
    </div>
  )
}
