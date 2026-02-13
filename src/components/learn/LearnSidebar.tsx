import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { LEVELS, MODULES } from "../../data/curriculum";
import { getLessonsByModule } from "../../data/lessons";
import { useProgress } from "../../contexts/ProgressContext";
import { useAdmin } from "../../contexts/AdminContext";
import { canAccessLevel } from "../../lib/access";

export function LearnSidebar() {
  const { levelId, moduleSlug } = useParams();
  const { isLessonComplete, getQuizScore } = useProgress();
  const { isAdmin } = useAdmin();
  const [expandedLevels, setExpandedLevels] = useState<Set<number>>(
    () => new Set(levelId ? [parseInt(levelId)] : [1])
  );

  const toggleLevel = (id: number) => {
    setExpandedLevels((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block">
      <div className="sticky top-24 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 overflow-hidden">
        <div className="p-4 border-b border-surface-200 dark:border-surface-700">
          <h3 className="font-semibold text-surface-900 dark:text-surface-100">
            Curriculum
          </h3>
        </div>
        <nav className="max-h-[calc(100vh-12rem)] overflow-y-auto">
          {LEVELS.map((level) => {
            const modules = level.moduleIds
              .map((id) => MODULES.find((m) => m.id === id))
              .filter(Boolean);
            const isExpanded = expandedLevels.has(level.id);
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
                  className={`w-full flex items-center gap-2 px-4 py-3 text-left ${
                    isCurrentLevel ? "bg-primary-50 dark:bg-primary-900/20" : "hover:bg-surface-50 dark:hover:bg-surface-700/50"
                  } ${!unlocked ? "opacity-60" : ""}`}
                >
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4 text-surface-500 shrink-0" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-surface-500 shrink-0" />
                  )}
                  <span className="font-medium text-surface-900 dark:text-surface-100">
                    Level {level.id}
                  </span>
                </button>
                {isExpanded && (
                  <div className="pb-2">
                    {modules.map((mod) => {
                      if (!mod) return null;
                      const lessons = getLessonsByModule(mod.id);
                      const completed = lessons.filter((l) => isLessonComplete(l.id)).length;
                      const total = lessons.length;
                      const isCurrentModule = moduleSlug === mod.slug;
                      return (
                        <Link
                          key={mod.id}
                          to={unlocked ? `/learn/${level.id}/${mod.slug}` : "#"}
                          onClick={(e) => !unlocked && e.preventDefault()}
                          className={`block px-4 py-2 pl-10 text-sm ${
                            isCurrentModule ? "text-primary-600 dark:text-primary-400 font-medium" : "text-surface-600 dark:text-surface-400"
                          } hover:text-primary-600 dark:hover:text-primary-400`}
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
