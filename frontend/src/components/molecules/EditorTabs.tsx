import { type EditorTab } from "../../store/editorTabsStore";
import { FileIcon } from "../atoms/FileIcon";
import { X } from "lucide-react";

interface EditorTabsProps {
  tabs: EditorTab[];
  activeTabId: string | null;
  onTabChange: (tabId: string) => void;
  onTabClose?: (tabId: string) => void;
}

export const EditorTabs = ({
  tabs,
  activeTabId,
  onTabChange,
  onTabClose,
}: EditorTabsProps) => (
  <div
    style={{
      display: 'flex',
      width: '100%',
      alignItems: 'flex-end',
      overflowX: 'auto',
      background: '#0A0A0B',
      height: '32px',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      scrollbarWidth: 'none',
    }}
    className="scrollbar-hide"
  >
    {tabs.map((tab) => {
      const isActive = tab.id === activeTabId;

      return (
        <div
          key={tab.id}
          role="button"
          onClick={() => onTabChange(tab.id)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            padding: '0 12px',
            height: '32px',
            fontSize: '13px',
            fontFamily: 'Geist, system-ui, sans-serif',
            cursor: 'pointer',
            minWidth: '120px',
            maxWidth: '180px',
            borderRight: '1px solid rgba(255,255,255,0.05)',
            flexShrink: 0,
            transition: 'background 0.15s ease',
            background: isActive ? '#0E0E11' : 'transparent',
            color: isActive ? '#F0EEE8' : '#6E6D6A',
            borderBottom: isActive ? '1px solid #5B7FFF' : '1px solid transparent',
            boxSizing: 'border-box',
          }}
          onMouseEnter={(e) => {
            if (!isActive) {
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
              e.currentTarget.style.color = '#CCCCCC'
            }
          }}
          onMouseLeave={(e) => {
            if (!isActive) {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#6E6D6A'
            }
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflow: 'hidden', minWidth: 0 }}>
            <FileIcon name={tab.label} size={13} />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {tab.label}
            </span>
          </div>

          {onTabClose && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onTabClose(tab.id);
              }}
              style={{
                background: 'none',
                border: 'none',
                padding: '2px',
                cursor: 'pointer',
                color: isActive ? '#6E6D6A' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '2px',
                transition: 'color 0.1s ease, background 0.1s ease',
                flexShrink: 0,
              }}
              className="group-hover:text-gray-400"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#F0EEE8'
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isActive ? '#6E6D6A' : 'transparent'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <X size={12} />
            </button>
          )}
        </div>
      );
    })}
  </div>
);
