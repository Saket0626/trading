import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronDown, ChevronRight, Lock, PanelLeftClose, PanelLeft } from "lucide-react";
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
  const { curriculumOpen, toggleCurriculum } = useSidebar();
  const [expandedLevel, setExpandedLevel] = useState<number | null>(
    () => (levelId ? parseInt(levelId) : 1)
  );

  const toggleLevel = (id: number) => {
    setExpandedLevel((prev) => (prev === id ? null : id));
  };

  // Collapsed: show narrow strip with expand button
  if (!curriculumOpen) {
    return (
      <aside
        className="flex-shrink-0 hidden lg:flex flex-col items-center py-4"
        aria-label="Curriculum navigation collapsed"
      >
        <button
          onClick={toggleCurriculum}
          className="flex flex-col items-center gap-2 p-3 rounded-r-lg border border-l-0 border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 hover:bg-surface-50 dark:hover:bg-surface-700/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          aria-expanded="false"
          aria-label="Show curriculum"
          title="Show curriculum"
        >
          <PanelLeft className="h-5 w-5 text-surface-600 dark:text-surface-400" aria-hidden />
          <span className="text-xs font-medium text-surface-600 dark:text-surface-400 whitespace-nowrap [writing-mode:vertical] [text-orientation:mixed] rotate-180">
            Curriculum
          </span>
        </button>
      </aside>
    );
  }

  return (
    <aside
      className="w-64 flex-shrink-0 hidden lg:block"
      aria-label="Curriculum navigation"
    >
      <div className="sticky top-24 rounded border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 overflow-hidden">
        <div className="flex items-center justify-between p-3 border-b border-surface-200 dark:border-surface-700">
          <h2 className="font-medium text-surface-900 dark:text-surface-100 text-sm">
            Curriculum
          </h2>
          <button
            onClick={toggleCurriculum}
            className="p-1.5 rounded-md text-surface-500 hover:text-surface-700 hover:bg-surface-100 dark:hover:text-surface-400 dark:hover:bg-surface-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            aria-expanded="true"
            aria-label="Hide curriculum"
            title="Hide curriculum"
          >
            <PanelLeftClose className="h-4 w-4" aria-hidden />
          </button>
        </div>
        <nav className="max-h-[calc(100vh-12rem)] overflow-y-auto" aria-label="Course curriculum">
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
              <div key={level.id} className="border-b border-surface-100 dark:border-surface-700 last:border-0">
                <button
                  onClick={() => toggleLevel(level.id)}
                  className={`w-full flex items-center gap-2 px-3 py-2.5 text-left text-sm ${
                    isCurrentLevel ? "bg-surface-100 dark:bg-surface-700/50" : "hover:bg-surface-50 dark:hover:bg-surface-800/50"
                  } ${!unlocked ? "opacity-60" : ""} focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset`}
                  aria-expanded={isExpanded}
                  aria-controls={`level-${level.id}-modules`}
                >
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4 text-surface-500 shrink-0" aria-hidden />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-surface-500 shrink-0" aria-hidden />
                  )}
                  <span className="font-medium text-surface-900 dark:text-surface-100">
                    Level {level.id}
                  </span>
                  {!unlocked && (
                    <Lock className="h-4 w-4 text-surface-400 dark:text-surface-500 shrink-0 ml-auto" aria-hidden />
                  )}
                </button>
                {isExpanded && (
                  <div id={`level-${level.id}-modules`} className="pb-2">
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
                            className="flex items-center justify-between gap-2 px-4 py-2 pl-10 text-sm text-surface-500 dark:text-surface-400 cursor-not-allowed"
                            aria-disabled="true"
                            title="Complete previous levels to unlock"
                          >
                            <span className="truncate">{mod.title}</span>
                            <Lock className="h-4 w-4 shrink-0 text-surface-400 dark:text-surface-500" aria-hidden />
                          </div>
                        );
                      }
                      return (
                        <Link
                          key={mod.id}
                          to={`/learn/${level.id}/${mod.slug}`}
                          className={`block px-4 py-2 pl-10 text-sm ${
                            isCurrentModule ? "text-primary-600 dark:text-primary-400 font-medium" : "text-surface-600 dark:text-surface-400"
                          } hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset rounded`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="truncate">{mod.title}</span>
                            {total > 0 && (
                              <span className="text-xs shrink-0">
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
  );
}
