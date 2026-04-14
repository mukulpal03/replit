export interface CreateProjectResponse {
  message: string
  id: string
}

export interface DirectoryNode {
  name: string
  size?: number
  type?: 'directory' | 'file'
  extension?: string
  children?: DirectoryNode[]
}

export interface GetDirectoryTreeResponse {
  message: string
  tree: DirectoryNode
}
