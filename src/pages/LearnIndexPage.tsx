import { Link } from "react-router-dom";
import { LEVELS } from "../data/curriculum";
import { Lock, Crown, BarChart3 } from "lucide-react";
import { useProgress } from "../contexts/ProgressContext";
import { useAdmin } from "../contexts/AdminContext";
import { canAccessLevel } from "../lib/access";

export function LearnIndexPage() {
  const { getQuizScore } = useProgress();
  const { isAdmin } = useAdmin();
  const level2Unlocked = canAccessLevel(2, getQuizScore, isAdmin);
  const level3Unlocked = canAccessLevel(3, getQuizScore, isAdmin);
  const level4Unlocked = canAccessLevel(4, getQuizScore, isAdmin);
  const level5Unlocked = canAccessLevel(5, getQuizScore, isAdmin);

  return (
    <div className="max-w-[1200px] mx-auto px-8 py-12">
      <header className="mb-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
          Learning Path
        </h1>
        <p className="mt-2 text-[var(--text-secondary)] text-lg">
          Choose a level to start or continue your journey.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
        {LEVELS.map((level) => {
          const locked =
            (level.id === 2 && !level2Unlocked) ||
            (level.id === 3 && !level3Unlocked) ||
            (level.id === 4 && !level4Unlocked) ||
            (level.id === 5 && !level5Unlocked);
          const difficulty =
            level.id === 1 ? "BEGINNER" : level.id <= 3 ? "INTERMEDIATE" : "ADVANCED";
          const badgeColor =
            level.id === 1
              ? "bg-[#00D4AA20] text-[var(--accent-primary)]"
              : level.id <= 3
                ? "bg-[#F59E0B20] text-[var(--accent-secondary)]"
                : "bg-[#EF444420] text-[var(--accent-danger)]";

          const cardContent = (
            <div
              className={`rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] overflow-hidden transition-all duration-250 ${
                locked
                  ? "opacity-75 cursor-not-allowed"
                  : "hover:-translate-y-1.5 hover:border-[#00D4AA40] hover:shadow-[var(--glow-teal)] cursor-pointer"
              }`}
            >
              <div className="h-40 bg-[var(--bg-tertiary)] flex items-center justify-center">
                <BarChart3 className="h-14 w-14 text-[var(--accent-primary)] opacity-70" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`inline-block px-2.5 py-1 rounded text-[12px] font-semibold uppercase ${badgeColor}`}>
                    {difficulty}
                  </span>
                  {locked && !isAdmin && (
                    <span className="inline-flex items-center gap-1 text-[13px] text-[var(--accent-secondary)]">
                      <Lock className="h-4 w-4" />
                      Locked
                    </span>
                  )}
                  {isAdmin && (
                    <span className="inline-flex items-center gap-1" title="Admin unlocked">
                      <Crown className="h-4 w-4 text-[var(--accent-secondary)]" />
                    </span>
                  )}
                </div>
                <h2 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {level.title}
                </h2>
                <p className="text-[14px] text-[var(--text-secondary)] line-clamp-2 mb-4">
                  {level.description}
                </p>
                <div className="h-1.5 rounded-full bg-[var(--bg-tertiary)] overflow-hidden mb-3">
                  <div className="h-full bg-[var(--accent-primary)] rounded-full" style={{ width: "0%" }} />
                </div>
                <p className="text-[13px] text-[var(--text-secondary)]">
                  {level.moduleIds.length} lessons · Free
                </p>
                {locked && level.id === 2 && (
                  <p className="mt-3 text-[13px] text-[var(--text-secondary)]">
                    Pass the Level 1 Final Exam with 80%+ to unlock.{" "}
                    <Link to="/learn/1/level-1-exam/level-1-exam" className="text-[var(--accent-primary)] hover:underline font-medium">
                      Take Exam →
                    </Link>
                  </p>
                )}
                {locked && level.id === 3 && (
                  <p className="mt-3 text-[13px] text-[var(--text-secondary)]">
                    Pass the Level 2 Final Exam with 80%+ to unlock.{" "}
                    <Link to="/learn/2/level-2-exam/level-2-exam" className="text-[var(--accent-primary)] hover:underline font-medium">
                      Take Exam →
                    </Link>
                  </p>
                )}
                {locked && level.id === 4 && (
                  <p className="mt-3 text-[13px] text-[var(--text-secondary)]">
                    Pass the Level 3 Final Exam with 80%+ to unlock.{" "}
                    <Link to="/learn/3/level-3-exam/level-3-exam" className="text-[var(--accent-primary)] hover:underline font-medium">
                      Take Exam →
                    </Link>
                  </p>
                )}
                {locked && level.id === 5 && (
                  <p className="mt-3 text-[13px] text-[var(--text-secondary)]">
                    Pass the Level 4 Final Exam with 80%+ to unlock.{" "}
                    <Link to="/learn/4/level-4-exam/level-4-exam" className="text-[var(--accent-primary)] hover:underline font-medium">
                      Take Exam →
                    </Link>
                  </p>
                )}
              </div>
            </div>
          );

          const gridClasses = level.id === 4 ? "lg:col-span-2 lg:col-start-2" : level.id === 5 ? "lg:col-span-2 lg:col-start-4" : "lg:col-span-2";
          return (
            <div key={level.id} className={gridClasses}>
              {locked && !isAdmin ? (
                <div className="block">{cardContent}</div>
              ) : (
                <Link to={`/learn/${level.id}`} className="block group">
                  {cardContent}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
