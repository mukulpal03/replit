import { CreateProjectSection } from '../components/organisms/CreateProjectSection'

export const HomePage = () => (
  <main className="min-h-screen px-4 py-16">
    <div className="mx-auto mb-10 max-w-xl text-center">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Project Generator
      </h1>
      <p className="mt-3 text-sm text-muted-foreground sm:text-base">
        Create a fresh Vite + React project through your backend API.
      </p>
    </div>

    <CreateProjectSection />
  </main>
)
