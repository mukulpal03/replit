import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Spinner } from '../ui/spinner'

interface CreateProjectCardProps {
  isLoading: boolean
  onCreateProject: () => void
}

export const CreateProjectCard = ({
  isLoading,
  onCreateProject,
}: CreateProjectCardProps) => (
  <Card>
    <CardHeader>
      <CardTitle>Create Project</CardTitle>
      <CardDescription>
        Start a new React Vite project from the backend generator.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <Button
        className="w-full"
        onClick={onCreateProject}
        disabled={isLoading}
        type="button"
      >
        {isLoading ? (
          <>
            <Spinner className="mr-2" />
            Creating project...
          </>
        ) : (
          'Create Project'
        )}
      </Button>
    </CardContent>
  </Card>
)
