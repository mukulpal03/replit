import { cn } from '../../lib/utils'

export interface EditorTabItem {
  id: string
  label: string
}

interface EditorTabsProps {
  tabs: EditorTabItem[]
  activeTabId: string
  onChange: (tabId: string) => void
}

export const EditorTabs = ({ tabs, activeTabId, onChange }: EditorTabsProps) => (
  <div className="flex items-center gap-1 border-b bg-muted/50 px-2 py-1">
    {tabs.map((tab) => {
      const isActive = tab.id === activeTabId

      return (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={cn(
            'rounded-sm px-3 py-1.5 text-xs font-medium transition-colors',
            isActive
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:bg-background/60 hover:text-foreground',
          )}
        >
          {tab.label}
        </button>
      )
    })}
  </div>
)
