import { useMemo, useState } from 'react'
import Editor from '@monaco-editor/react'
import { EditorTabs, type EditorTabItem } from '../molecules/EditorTabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'

const starterFiles: Record<string, string> = {
  'App.tsx': `export default function App() {
  return <h1>Hello from playground</h1>
}
`,
  'main.tsx': `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
`,
}

const tabs: EditorTabItem[] = Object.keys(starterFiles).map((fileName) => ({
  id: fileName,
  label: fileName,
}))

export const PlaygroundEditor = () => {
  const [activeTabId, setActiveTabId] = useState<string>(tabs[0].id)

  const activeCode = useMemo(() => starterFiles[activeTabId], [activeTabId])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Playground</CardTitle>
        <CardDescription>
          Basic Monaco editor setup with code-style tabs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-hidden rounded-md border">
          <EditorTabs
            tabs={tabs}
            activeTabId={activeTabId}
            onChange={setActiveTabId}
          />
          <Editor
            height="60vh"
            language="typescript"
            value={activeCode}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              scrollBeyondLastLine: false,
            }}
          />
        </div>
      </CardContent>
    </Card>
  )
}
