import { create } from "zustand";

export interface EditorTab {
  id: string;
  label: string;
}

interface EditorTabsStore {
  tabs: EditorTab[];
  activeTabId: string | null;
  setTabs: (tabs: EditorTab[]) => void;
  setActiveTab: (tabId: string) => void;
}

export const useEditorTabsStore = create<EditorTabsStore>((set) => ({
  tabs: [],
  activeTabId: null,
  setTabs: (tabs) => set({ tabs, activeTabId: tabs[0]?.id ?? null }),
  setActiveTab: (tabId) => set({ activeTabId: tabId }),
}));
