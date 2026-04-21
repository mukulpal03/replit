import { useParams } from "react-router-dom";
import { PlaygroundEditor } from "../components/organisms/PlaygroundEditor";
import { FileTree } from "../components/organisms/FileTree";
import { PlaygroundTerminal } from "../components/organisms/PlaygroundTerminal";
import { PlaygroundNavbar } from "../components/organisms/PlaygroundNavbar";
import { useDirectoryTreeQuery } from "../apis/queries/useDirectoryTreeQuery";
import { useEditorSocket } from "../hooks/useEditorSocket";
import type { DirectoryNode } from "../types/project";

export const ProjectPlaygroundPage = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const { readFile } = useEditorSocket(projectId);

  const { data, isLoading, isError } = useDirectoryTreeQuery(projectId ?? "");

  const handleFileClick = (node: DirectoryNode) => {
    if (node.type === "file" || !node.children) {
      readFile(node.path);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflow: 'hidden',
        background: '#0E0E11',
        color: '#F0EEE8',
        fontFamily: 'Geist, system-ui, sans-serif',
      }}
    >
      <PlaygroundNavbar projectId={projectId ?? ""} />

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        <aside
          style={{
            width: '240px',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            background: '#0E0E11',
            borderRight: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* Explorer Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 12px',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
            }}
          >
            <span
              style={{
                fontSize: '11px',
                fontFamily: 'Geist, sans-serif',
                color: '#3E3D3B',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              Explorer
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* New file icon */}
              <button
                title="New File"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '2px',
                  cursor: 'pointer',
                  color: '#3E3D3B',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#F0EEE8' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#3E3D3B' }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2h7l3 3v7a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M7 5V9M5 7h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </button>
              {/* New folder icon */}
              <button
                title="New Folder"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '2px',
                  cursor: 'pointer',
                  color: '#3E3D3B',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#F0EEE8' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#3E3D3B' }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 4a1 1 0 011-1h3l1.5 1.5H12a1 1 0 011 1V11a1 1 0 01-1 1H2a1 1 0 01-1-1V4z" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M7 7v3M5.5 8.5h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Tree */}
          <div style={{ flex: 1, overflow: 'hidden' }}>
            {isLoading && (
              <p style={{ padding: '8px 12px', fontSize: '13px', color: '#6E6D6A', fontFamily: 'Geist, sans-serif' }}>
                Loading...
              </p>
            )}
            {isError && (
              <p style={{ padding: '8px 12px', fontSize: '13px', color: '#FF5757', fontFamily: 'Geist, sans-serif' }}>
                Failed to load tree
              </p>
            )}
            {data?.tree && (
              <FileTree root={data.tree} onFileClick={handleFileClick} />
            )}
          </div>
        </aside>

        {/* Editor Area */}
        <main
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            background: '#0E0E11',
            minWidth: 0,
          }}
        >
          {/* Editor */}
          <div style={{ flex: 3, overflow: 'hidden', minHeight: 0, display: 'flex' }}>
            <PlaygroundEditor />
          </div>

          {/* Resize handle */}
          <div
            style={{
              height: '4px',
              width: '100%',
              flexShrink: 0,
              background: 'rgba(255,255,255,0.04)',
              cursor: 'row-resize',
              transition: 'background 0.15s ease',
              zIndex: 10,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(91,127,255,0.4)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
          />

          {/* Terminal */}
          <div style={{ flex: 1, overflow: 'hidden', minHeight: 0, display: 'flex' }}>
            <PlaygroundTerminal />
          </div>
        </main>
      </div>
    </div>
  );
};
