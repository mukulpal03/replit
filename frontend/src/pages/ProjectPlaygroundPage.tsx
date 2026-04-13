import { useParams } from 'react-router-dom'
import { PlaygroundEditor } from '../components/organisms/PlaygroundEditor'

export const ProjectPlaygroundPage = () => {
  const { projectId } = useParams<{ projectId: string }>()

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4">
        <p className="text-sm text-muted-foreground">
          Project ID: {projectId ?? 'Unknown'}
        </p>
        <PlaygroundEditor />
      </div>
    </main>
  )
}
