import { RouterProvider } from 'react-router-dom'
import { QueryProvider } from './app/providers/QueryProvider'
import { appRouter } from './app/router'

function App() {
  return (
    <QueryProvider>
      <RouterProvider router={appRouter} />
    </QueryProvider>
  )
}

export default App
