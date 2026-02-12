import { Link, useParams, Navigate } from "react-router-dom";
import { LEVELS } from "../data/curriculum";
import { MODULES } from "../data/curriculum";
import { useProgress } from "../contexts/ProgressContext";

const EXAM_PASS_PERCENT = 80;

export function LearnPage() {
  const { levelId } = useParams<{ levelId: string }>();
  const { getQuizScore } = useProgress();
  const level = LEVELS.find((l) => l.id === parseInt(levelId || "1"));

  if (!level) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p>Level not found.</p>
        <Link to="/learn/1" className="text-primary-500 hover:underline">
          Go to Level 1
        </Link>
      </div>
    );
  }

  const level1ExamScore = getQuizScore("level-1-exam");
  const level2ExamScore = getQuizScore("level-2-exam");
  const level3ExamScore = getQuizScore("level-3-exam");
  const level4ExamScore = getQuizScore("level-4-exam");
  const level2Unlocked = level1ExamScore !== undefined && level1ExamScore >= EXAM_PASS_PERCENT;
  const level3Unlocked = level2ExamScore !== undefined && level2ExamScore >= EXAM_PASS_PERCENT;
  const level4Unlocked = level3ExamScore !== undefined && level3ExamScore >= EXAM_PASS_PERCENT;
  const level5Unlocked = level4ExamScore !== undefined && level4ExamScore >= EXAM_PASS_PERCENT;
  if (level.id === 2 && !level2Unlocked) return <Navigate to="/learn/1" replace />;
  if (level.id === 3 && !level3Unlocked) return <Navigate to="/learn/2" replace />;
  if (level.id === 4 && !level4Unlocked) return <Navigate to="/learn/3" replace />;
  if (level.id === 5 && !level5Unlocked) return <Navigate to="/learn/4" replace />;

  const modules = level.moduleIds
    .map((id) => MODULES.find((m) => m.id === id))
    .filter(Boolean);

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-8 text-sm text-surface-600 dark:text-surface-400">
        <Link to="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/learn" className="hover:text-primary-500">Learn</Link>
        <span className="mx-2">/</span>
        <span className="text-surface-900 dark:text-surface-100">Level {level.id}</span>
      </nav>

      <header className="mb-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-surface-900 dark:text-surface-100">
          Level {level.id}: {level.title}
        </h1>
        <p className="mt-2 text-surface-600 dark:text-surface-400 text-lg">
          {level.description}
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <Link
            key={module!.id}
            to={`/learn/${level.id}/${module!.slug}`}
            className="block p-6 rounded-xl border border-surface-200 dark:border-surface-700 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-surface-50 dark:hover:bg-surface-800/50 transition-all"
          >
            <h2 className="font-display font-semibold text-lg text-surface-900 dark:text-surface-100">
              {module!.title}
            </h2>
            <p className="mt-2 text-sm text-surface-600 dark:text-surface-400 line-clamp-2">
              {module!.description}
            </p>
            <p className="mt-4 text-sm text-primary-600 dark:text-primary-400 font-medium">
              {module!.lessonIds.length} lessons →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
