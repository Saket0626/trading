import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronDown, ChevronRight, Lock, LockOpen, PanelLeftClose, PanelLeft } from "lucide-react";
import { LEVELS, MODULES } from "../../data/curriculum";
import { getLessonsByModule } from "../../data/lessons";
import { useProgress } from "../../contexts/ProgressContext";
import { useAdmin } from "../../contexts/AdminContext";
import { useSidebar } from "../../contexts/SidebarContext";
import { canAccessLevel } from "../../lib/access";

export function LearnSidebar() {
  const { levelId, moduleSlug } = useParams();
  const { isLessonComplete, getQuizScore } = useProgress();
  const { isAdmin } = useAdmin();
  const { curriculumOpen, toggleCurriculum, sidebarWidth } = useSidebar();
  const [expandedLevel, setExpandedLevel] = useState<number | null>(
    () => (levelId ? parseInt(levelId) : 1)
  );
  const [scrolledPastTicker, setScrolledPastTicker] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrolledPastTicker(pct >= 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLevel = (id: number) => {
    setExpandedLevel((prev) => (prev === id ? null : id));
  };

  // Slide up when scrolled: top-16 = directly under header/line; top-[7.5rem] = below ticker
  const collapsedTop = scrolledPastTicker ? "top-16" : "top-[7.5rem]";

  if (!curriculumOpen) {
    return (
      <div className="hidden lg:block flex-shrink-0" style={{ width: sidebarWidth }} aria-hidden>
        <aside
          className={`fixed left-0 ${collapsedTop} z-40 flex items-start transition-[top] duration-200`}
          aria-label="Curriculum navigation collapsed"
        >
          <button
            onClick={toggleCurriculum}
            className="flex items-center gap-2 px-2 py-1.5 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] text-sm font-medium"
            aria-expanded="false"
            aria-label="Show curriculum"
            title="Show curriculum"
          >
            <PanelLeft className="h-4 w-4 shrink-0" aria-hidden />
            <span>Show</span>
          </button>
        </aside>
      </div>
    );
  }

  return (
    <div className="hidden lg:block flex-shrink-0 w-[260px]" aria-hidden>
    <aside
      className="sticky top-24 z-40 w-full flex flex-col overflow-hidden max-h-[calc(100vh-6rem)]"
      aria-label="Curriculum navigation"
    >
      <div className="flex flex-col overflow-y-auto flex-1 min-h-0">
        <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-4 mb-4">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              Curriculum
            </p>
            <button
              onClick={toggleCurriculum}
              className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              aria-expanded="true"
              aria-label="Hide curriculum"
              title="Hide curriculum"
            >
              <PanelLeftClose className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto space-y-1" aria-label="Course curriculum">
          {LEVELS.map((level) => {
            const modules = level.moduleIds
              .map((id) => MODULES.find((m) => m.id === id))
              .filter(Boolean);
            const isExpanded = expandedLevel === level.id;
            const isCurrentLevel = levelId === String(level.id);
            const level2Unlocked = canAccessLevel(2, getQuizScore, isAdmin);
            const level3Unlocked = canAccessLevel(3, getQuizScore, isAdmin);
            const level4Unlocked = canAccessLevel(4, getQuizScore, isAdmin);
            const level5Unlocked = canAccessLevel(5, getQuizScore, isAdmin);
            const unlocked =
              isAdmin ||
              (level.id === 1) ||
              (level.id === 2 && level2Unlocked) ||
              (level.id === 3 && level3Unlocked) ||
              (level.id === 4 && level4Unlocked) ||
              (level.id === 5 && level5Unlocked);

            return (
              <div key={level.id} className="space-y-0.5">
                <button
                  onClick={() => toggleLevel(level.id)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-sm transition-all duration-200 ${
                    isCurrentLevel
                      ? "bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-medium"
                      : "text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--accent-primary)]"
                  } ${!unlocked ? "opacity-60" : ""} focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-inset`}
                  aria-expanded={isExpanded}
                  aria-controls={`level-${level.id}-modules`}
                >
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4 text-current shrink-0" aria-hidden />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-current shrink-0" aria-hidden />
                  )}
                  <span>Level {level.id}</span>
                  {unlocked ? (
                    <LockOpen className="h-4 w-4 text-[var(--accent-primary)] shrink-0 ml-auto" aria-hidden title="Unlocked" />
                  ) : (
                    <Lock className="h-4 w-4 text-[var(--text-secondary)] shrink-0 ml-auto" aria-hidden title="Locked" />
                  )}
                </button>
                {isExpanded && (
                  <div id={`level-${level.id}-modules`} className="pl-2 ml-2 border-l border-[var(--border-subtle)] space-y-0.5 py-1">
                    {modules.map((mod) => {
                      if (!mod) return null;
                      const lessons = getLessonsByModule(mod.id);
                      const completed = lessons.filter((l) => isLessonComplete(l.id)).length;
                      const total = lessons.length;
                      const isCurrentModule = moduleSlug === mod.slug;
                      if (!unlocked) {
                        return (
                          <div
                            key={mod.id}
                            className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-sm text-[var(--text-secondary)] cursor-not-allowed opacity-60"
                            aria-disabled="true"
                            title="Complete previous levels to unlock"
                          >
                            <span className="truncate">{mod.title}</span>
                            <Lock className="h-4 w-4 shrink-0" aria-hidden />
                          </div>
                        );
                      }
                      return (
                        <Link
                          key={mod.id}
                          to={`/learn/${level.id}/${mod.slug}`}
                          className={`block px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                            isCurrentModule
                              ? "bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-medium"
                              : "text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--accent-primary)]"
                          } focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-inset`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="truncate">{mod.title}</span>
                            {total > 0 && (
                              <span className="text-xs shrink-0 text-[var(--text-secondary)]">
                                {completed}/{total}
                              </span>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
    </div>
  );
}
