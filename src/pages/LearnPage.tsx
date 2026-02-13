import { Link, useParams, Navigate } from "react-router-dom";
import { LEVELS } from "../data/curriculum";
import { MODULES } from "../data/curriculum";
import { useProgress } from "../contexts/ProgressContext";
import { useAdmin } from "../contexts/AdminContext";
import { canAccessLevel } from "../lib/access";
import { LearnSidebar } from "../components/learn/LearnSidebar";

export function LearnPage() {
  const { levelId } = useParams<{ levelId: string }>();
  const { getQuizScore } = useProgress();
  const { isAdmin } = useAdmin();
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

  const level2Unlocked = canAccessLevel(2, getQuizScore, isAdmin);
  const level3Unlocked = canAccessLevel(3, getQuizScore, isAdmin);
  const level4Unlocked = canAccessLevel(4, getQuizScore, isAdmin);
  const level5Unlocked = canAccessLevel(5, getQuizScore, isAdmin);
  if (!isAdmin && level.id === 2 && !level2Unlocked) return <Navigate to="/learn/1" replace />;
  if (!isAdmin && level.id === 3 && !level3Unlocked) return <Navigate to="/learn/2" replace />;
  if (!isAdmin && level.id === 4 && !level4Unlocked) return <Navigate to="/learn/3" replace />;
  if (!isAdmin && level.id === 5 && !level5Unlocked) return <Navigate to="/learn/4" replace />;

  const modules = level.moduleIds
    .map((id) => MODULES.find((m) => m.id === id))
    .filter(Boolean);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <LearnSidebar />
        <div className="flex-1 min-w-0">
      <nav className="mb-8 text-sm text-surface-600 dark:text-surface-400">
        <Link to="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/learn" className="hover:text-primary-500">Learn</Link>
        <span className="mx-2">/</span>
        <span className="text-surface-900 dark:text-surface-100">Level {level.id}</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-xl font-semibold text-surface-900 dark:text-surface-100">
          Level {level.id}: {level.title}
        </h1>
        <p className="mt-1 text-surface-500 dark:text-surface-400 text-sm">
          {level.description}
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <Link
            key={module!.id}
            to={`/learn/${level.id}/${module!.slug}`}
            className="block p-4 rounded border border-surface-200 dark:border-surface-700 hover:border-surface-300 dark:hover:border-surface-600 hover:bg-surface-50 dark:hover:bg-surface-800/50 transition-colors"
          >
            <h2 className="font-medium text-surface-900 dark:text-surface-100 text-sm">
              {module!.title}
            </h2>
            <p className="mt-1 text-xs text-surface-500 dark:text-surface-400 line-clamp-2">
              {module!.description}
            </p>
            <p className="mt-3 text-xs text-primary-600 dark:text-primary-400 font-medium">
              {module!.lessonIds.length} lessons →
            </p>
          </Link>
        ))}
      </div>
        </div>
      </div>
    </div>
  );
}
