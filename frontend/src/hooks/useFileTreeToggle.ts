import { useState } from 'react'

/**
 * Hook to manage the expansion state of folders in the file tree.
 * Includes logic to recursively close all sub-folders when a parent folder is closed.
 */
export const useFileTreeToggle = () => {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({})

  const toggleFolder = (nodePath: string) => {
    setOpenFolders((prev) => {
      const isCurrentlyOpen = prev[nodePath] ?? false
      
      if (isCurrentlyOpen) {
        // Closing the folder: remove its state and all children sub-paths
        const newState = { ...prev }
        delete newState[nodePath]
        
        // Find all sub-paths starting with "nodePath/" and remove them
        const prefix = `${nodePath}/`
        Object.keys(newState).forEach((key) => {
          if (key.startsWith(prefix)) {
            delete newState[key]
          }
        })
        
        return newState
      } else {
        // Opening the folder: add it to the state
        return {
          ...prev,
          [nodePath]: true,
        }
      }
    })
  }

  return {
    openFolders,
    toggleFolder,
  }
}
