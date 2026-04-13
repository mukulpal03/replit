import { AxiosError } from 'axios'
import { Alert } from '../ui/alert'
import { CreateProjectCard } from '../molecules/CreateProjectCard'
import { useCreateProjectMutation } from '../../hooks/mutations/useCreateProjectMutation'

interface ApiErrorResponse {
  message?: string
}

export const CreateProjectSection = () => {
  const {
    mutate,
    data: projectResult,
    error: projectError,
    isPending,
  } = useCreateProjectMutation()

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col gap-4">
      <CreateProjectCard isLoading={isPending} onCreateProject={() => mutate()} />

      {projectResult ? (
        <Alert variant="success">
          {projectResult.message}. Project ID: <strong>{projectResult.id}</strong>
        </Alert>
      ) : null}

      {projectError ? (
        <Alert variant="destructive">
          {(projectError as AxiosError<ApiErrorResponse>).response?.data?.message ??
            'Unable to create project. Please try again.'}
        </Alert>
      ) : null}
    </section>
  )
}
