import { useMemo, useRef, useEffect } from "react";
import Editor, { loader } from "@monaco-editor/react";
import { EditorTabs } from "../molecules/EditorTabs";
import { useEditorTabsStore } from "../../store/editorTabsStore";
import { editorSocket } from "../../lib/socket";
import { getLanguageFromFileName } from "../../lib/file";

loader.init().then((monaco) => {
  monaco.editor.defineTheme("devix-dark", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "keyword", foreground: "C792EA" },
      { token: "string", foreground: "C3E88D" },
      { token: "number", foreground: "F78C6C" },
      { token: "comment", foreground: "4A4A6A" },
      { token: "identifier", foreground: "EEFFFF" },
      { token: "type", foreground: "FFCB6B" },
      { token: "delimiter", foreground: "89DDFF" },
      { token: "variable", foreground: "EEFFFF" },
    ],
    colors: {
      "editor.background": "#0E0E11",
      "editor.foreground": "#EEFFFF",
      "editorLineNumber.foreground": "#3E3D3B",
      "editorLineNumber.activeForeground": "#6E6D6A",
      "editor.lineHighlightBackground": "#ffffff06",
      "editor.selectionBackground": "#5B7FFF33",
      "editor.inactiveSelectionBackground": "#5B7FFF1A",
      "editorCursor.foreground": "#5B7FFF",
      "editor.findMatchBackground": "#5B7FFF44",
      "editorWidget.background": "#111114",
      "editorWidget.border": "#ffffff10",
      "editorSuggestWidget.background": "#111114",
      "editorSuggestWidget.border": "#ffffff10",
      "editorSuggestWidget.selectedBackground": "#5B7FFF20",
      "scrollbar.shadow": "transparent",
      "scrollbarSlider.background": "#ffffff12",
      "scrollbarSlider.hoverBackground": "#ffffff20",
      "tab.activeBackground": "#0E0E11",
      "tab.inactiveBackground": "#0A0A0B",
      "tab.border": "#ffffff08",
      "editorGutter.background": "#0E0E11",
      "minimap.background": "#0E0E11",
    },
  });
});

export const PlaygroundEditor = () => {
  const { tabs, activeTabId, setActiveTab, closeTab, updateTabContent } =
    useEditorTabsStore();

  const activeTab = useMemo(
    () => tabs.find((t) => t.id === activeTabId),
    [tabs, activeTabId],
  );

  const activeCode = activeTab?.content ?? "";
  const activeLanguage = getLanguageFromFileName(activeTab?.label ?? "");

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleEditorChange = (value: string | undefined) => {
    if (value === undefined || !activeTab) return;

    updateTabContent(activeTab.id, value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      editorSocket.emit("writeFile", {
        pathToFileOrDir: activeTab.id,
        data: value,
      });
    }, 1000);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        background: "#0E0E11",
      }}
    >
      {tabs.length > 0 ? (
        <>
          <EditorTabs
            tabs={tabs}
            activeTabId={activeTabId}
            onTabChange={setActiveTab}
            onTabClose={closeTab}
          />
          <div style={{ flex: 1, width: "100%", position: "relative" }}>
            <Editor
              language={activeLanguage}
              value={activeCode}
              theme="devix-dark"
              onChange={handleEditorChange}
              options={{
                minimap: { enabled: false },
                fontSize: 13,
                fontFamily:
                  "'JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', monospace",
                fontLigatures: true,
                scrollBeyondLastLine: false,
                automaticLayout: true,
                padding: { top: 16, bottom: 16 },
                lineHeight: 20.8, // 13px * 1.6
                cursorStyle: "line",
                cursorWidth: 2,
                renderLineHighlight: "all",
                lineNumbersMinChars: 4,
                glyphMargin: false,
                folding: true,
                scrollbar: {
                  verticalScrollbarSize: 6,
                  horizontalScrollbarSize: 6,
                },
                overviewRulerBorder: false,
              }}
            />
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            background: "#0E0E11",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "6px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "#3E3D3B" }}
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <span
              style={{
                fontSize: "13px",
                color: "#3E3D3B",
                fontFamily: "Geist, sans-serif",
              }}
            >
              Select a file from the explorer to begin.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
