import { useEffect, useMemo } from "react";
import Editor from "@monaco-editor/react";
import { EditorTabs } from "../molecules/EditorTabs";
import { useEditorTabsStore } from "../../store/editorTabsStore";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const STARTER_FILES: Record<string, string> = {
  "App.tsx": `export default function App() {
  return <h1>Hello from playground</h1>
}
`,
  "main.tsx": `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
`,
};

export const PlaygroundEditor = () => {
  const { tabs, activeTabId, setTabs, setActiveTab } = useEditorTabsStore();

  useEffect(() => {
    setTabs(
      Object.keys(STARTER_FILES).map((name) => ({ id: name, label: name }))
    );
  }, [setTabs]);

  const activeCode = useMemo(
    () => (activeTabId ? (STARTER_FILES[activeTabId] ?? "") : ""),
    [activeTabId]
  );

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
            onTabChange={setActiveTab}
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
  );
};
