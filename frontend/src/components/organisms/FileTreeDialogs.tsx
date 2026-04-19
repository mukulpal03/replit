import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../ui/dialog'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../ui/alert-dialog'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import type { DirectoryNode } from '../../types/project'

export type DialogType = 'rename' | 'createFile' | 'createFolder' | null

interface FileTreeDialogsProps {
  dialogState: { type: DialogType; node: DirectoryNode | null }
  deleteNode: DirectoryNode | null
  inputValue: string
  setInputValue: (val: string) => void
  closeDialogs: () => void
  handleDialogSubmit: (e: React.FormEvent) => void
  handleDeleteSubmit: () => void
}

export const FileTreeDialogs = ({
  dialogState,
  deleteNode,
  inputValue,
  setInputValue,
  closeDialogs,
  handleDialogSubmit,
  handleDeleteSubmit,
}: FileTreeDialogsProps) => {
  const getDialogTitle = () => {
    switch (dialogState.type) {
      case 'rename': return 'Rename'
      case 'createFile': return 'New File'
      case 'createFolder': return 'New Folder'
      default: return ''
    }
  }

  return (
    <>
      <Dialog open={dialogState.type !== null} onOpenChange={(open) => !open && closeDialogs()}>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleDialogSubmit}>
            <DialogHeader>
              <DialogTitle>{getDialogTitle()}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  autoFocus
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={closeDialogs}>Cancel</Button>
              <Button type="submit">Confirm</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog open={deleteNode !== null} onOpenChange={(open) => !open && closeDialogs()}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the {deleteNode?.type === 'directory' ? 'folder' : 'file'} "{deleteNode?.name}".
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteSubmit} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
