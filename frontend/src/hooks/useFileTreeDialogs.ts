import { useState } from 'react'
import type { FormEvent } from 'react'
import type { DirectoryNode } from '../types/project'
import type { DialogType } from '../components/organisms/FileTreeDialogs'

export const useFileTreeDialogs = () => {
  const [dialogState, setDialogState] = useState<{ type: DialogType; node: DirectoryNode | null }>({ type: null, node: null })
  const [deleteNode, setDeleteNode] = useState<DirectoryNode | null>(null)
  const [inputValue, setInputValue] = useState('')

  const openDialog = (type: DialogType, node: DirectoryNode) => {
    setDialogState({ type, node })
    setInputValue(type === 'rename' ? node.name : '')
  }

  const openDeleteDialog = (node: DirectoryNode) => {
    setDeleteNode(node)
  }

  const closeDialogs = () => {
    setDialogState({ type: null, node: null })
    setDeleteNode(null)
    setInputValue('')
  }

  const handleDialogSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || !dialogState.node) return

    console.log(`Action: ${dialogState.type}`, {
      target: dialogState.node.path,
      value: inputValue,
    })
    closeDialogs()
  }

  const handleDeleteSubmit = () => {
    if (!deleteNode) return
    console.log(`Action: delete`, { target: deleteNode.path })
    closeDialogs()
  }

  return {
    dialogState,
    deleteNode,
    inputValue,
    setInputValue,
    openDialog,
    openDeleteDialog,
    closeDialogs,
    handleDialogSubmit,
    handleDeleteSubmit,
  }
}
