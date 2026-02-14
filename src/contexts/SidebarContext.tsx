import { createContext, useContext, useState, useCallback, useEffect } from "react";

const STORAGE_KEY = "chartwise-curriculum-open";

const SIDEBAR_WIDTH_OPEN = 260;
const SIDEBAR_WIDTH_COLLAPSED = 44; // Icon button only, no bar

interface SidebarContextValue {
  curriculumOpen: boolean;
  toggleCurriculum: () => void;
  sidebarWidth: number;
}

const SidebarContext = createContext<SidebarContextValue | null>(null);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [curriculumOpen, setCurriculumOpen] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== null) setCurriculumOpen(stored === "true");
    } catch {
      // ignore
    }
  }, []);

  const toggleCurriculum = useCallback(() => {
    setCurriculumOpen((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_KEY, String(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const sidebarWidth = curriculumOpen ? SIDEBAR_WIDTH_OPEN : SIDEBAR_WIDTH_COLLAPSED;

  return (
    <SidebarContext.Provider value={{ curriculumOpen, toggleCurriculum, sidebarWidth }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const ctx = useContext(SidebarContext);
  return ctx ?? { curriculumOpen: true, toggleCurriculum: () => {}, sidebarWidth: SIDEBAR_WIDTH_OPEN };
}

export { SIDEBAR_WIDTH_OPEN, SIDEBAR_WIDTH_COLLAPSED };
