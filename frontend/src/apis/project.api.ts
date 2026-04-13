import { apiClient } from './axios'
import type { CreateProjectResponse } from '../types/project'

export const createProjectApi = async (): Promise<CreateProjectResponse> => {
  const { data } = await apiClient.post<CreateProjectResponse>('/v1/project')
  return data
}
