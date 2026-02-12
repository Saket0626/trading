import { Link } from "react-router-dom";
import { LEVELS } from "../data/curriculum";
import { ChevronRight, Lock } from "lucide-react";
import { useProgress } from "../contexts/ProgressContext";

const levelColors: Record<string, string> = {
  emerald: "from-emerald-500 to-teal-600",
  blue: "from-blue-500 to-cyan-600",
  violet: "from-violet-500 to-purple-600",
  amber: "from-amber-500 to-orange-600",
  rose: "from-rose-500 to-pink-600",
};

const EXAM_PASS_PERCENT = 80;

export function LearnIndexPage() {
  const { getQuizScore } = useProgress();
  const level1ExamScore = getQuizScore("level-1-exam");
  const level2ExamScore = getQuizScore("level-2-exam");
  const level3ExamScore = getQuizScore("level-3-exam");
  const level4ExamScore = getQuizScore("level-4-exam");
  const level2Unlocked = level1ExamScore !== undefined && level1ExamScore >= EXAM_PASS_PERCENT;
  const level3Unlocked = level2ExamScore !== undefined && level2ExamScore >= EXAM_PASS_PERCENT;
  const level4Unlocked = level3ExamScore !== undefined && level3ExamScore >= EXAM_PASS_PERCENT;
  const level5Unlocked = level4ExamScore !== undefined && level4ExamScore >= EXAM_PASS_PERCENT;

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-surface-900 dark:text-surface-100">
          Learning Path
        </h1>
        <p className="mt-2 text-surface-600 dark:text-surface-400 text-lg">
          Choose a level to start or continue your journey.
        </p>
      </header>

      <div className="space-y-6 max-w-3xl">
        {LEVELS.map((level) => {
          const locked =
            (level.id === 2 && !level2Unlocked) ||
            (level.id === 3 && !level3Unlocked) ||
            (level.id === 4 && !level4Unlocked) ||
            (level.id === 5 && !level5Unlocked);
          const cardContent = (
            <div
              className={`flex items-start gap-4 p-6 rounded-xl border transition-all ${
                locked
                  ? "border-surface-200 dark:border-surface-700 bg-surface-50/50 dark:bg-surface-800/30 opacity-90 cursor-not-allowed"
                  : "border-surface-200 dark:border-surface-700 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-surface-50 dark:hover:bg-surface-800/50"
              }`}
            >
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${levelColors[level.color] || "from-primary-500 to-primary-600"} flex items-center justify-center text-white font-bold`}
              >
                {level.id}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-display font-semibold text-lg text-surface-900 dark:text-surface-100 flex items-center gap-2">
                  {level.title}
                  {locked && (
                    <span className="inline-flex items-center gap-1 text-sm font-normal text-amber-600 dark:text-amber-400">
                      <Lock className="h-4 w-4" />
                      Locked
                    </span>
                  )}
                </h2>
                <p className="text-sm text-surface-600 dark:text-surface-400 mt-1">
                  {level.description}
                </p>
                {locked && level.id === 2 && (
                  <p className="mt-2 text-sm text-surface-600 dark:text-surface-400">
                    Pass the Level 1 Final Exam with 80% or higher to unlock.{" "}
                    <Link
                      to="/learn/1/level-1-exam/level-1-exam"
                      className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                    >
                      Take Level 1 Final Exam →
                    </Link>
                  </p>
                )}
                {locked && level.id === 3 && (
                  <p className="mt-2 text-sm text-surface-600 dark:text-surface-400">
                    Pass the Level 2 Final Exam with 80% or higher to unlock.{" "}
                    <Link
                      to="/learn/2/level-2-exam/level-2-exam"
                      className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                    >
                      Take Level 2 Final Exam →
                    </Link>
                  </p>
                )}
                {locked && level.id === 4 && (
                  <p className="mt-2 text-sm text-surface-600 dark:text-surface-400">
                    Pass the Level 3 Final Exam with 80% or higher to unlock.{" "}
                    <Link
                      to="/learn/3/level-3-exam/level-3-exam"
                      className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                    >
                      Take Level 3 Final Exam →
                    </Link>
                  </p>
                )}
                {locked && level.id === 5 && (
                  <p className="mt-2 text-sm text-surface-600 dark:text-surface-400">
                    Pass the Level 4 Final Exam with 80% or higher to unlock.{" "}
                    <Link
                      to="/learn/4/level-4-exam/level-4-exam"
                      className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                    >
                      Take Level 4 Final Exam →
                    </Link>
                  </p>
                )}
              </div>
              {!locked && (
                <ChevronRight className="flex-shrink-0 h-5 w-5 text-surface-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
              )}
            </div>
          );
          return (
            <div key={level.id}>
              {locked ? (
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
