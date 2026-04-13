import Editor from '@monaco-editor/react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'

const starterCode = `export default function App() {
  return <h1>Hello from playground</h1>
}
`

export const PlaygroundEditor = () => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>Playground</CardTitle>
      <CardDescription>Basic Monaco editor setup.</CardDescription>
    </CardHeader>
    <CardContent>
      <Editor
        height="60vh"
        defaultLanguage="typescript"
        defaultValue={starterCode}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          scrollBeyondLastLine: false,
        }}
      />
    </CardContent>
  </Card>
)
