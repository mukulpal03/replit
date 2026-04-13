import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../../pages/HomePage'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
])
