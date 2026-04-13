import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { createProjectApi } from '../../apis/project.api'
import type { CreateProjectResponse } from '../../types/project'

interface ApiErrorResponse {
  message: string
}

export const useCreateProjectMutation = () =>
  useMutation<CreateProjectResponse, AxiosError<ApiErrorResponse>>({
    mutationKey: ['create-project'],
    mutationFn: createProjectApi,
  })
