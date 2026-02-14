import { createContext, useContext, useState, useCallback, useEffect } from "react";

const STORAGE_KEY = "chartwise-curriculum-open";

interface SidebarContextValue {
  curriculumOpen: boolean;
  toggleCurriculum: () => void;
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

  return (
    <SidebarContext.Provider value={{ curriculumOpen, toggleCurriculum }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const ctx = useContext(SidebarContext);
  return ctx ?? { curriculumOpen: true, toggleCurriculum: () => {} };
}
