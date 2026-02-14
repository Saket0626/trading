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
      <div className="max-w-[1200px] mx-auto px-8 py-12">
        <p className="text-[var(--text-primary)]">Level not found.</p>
        <Link to="/learn/1" className="text-[var(--accent-primary)] hover:underline">
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
    <div className="max-w-[1200px] mx-auto px-8 py-10">
      <div className="flex gap-6">
        <LearnSidebar />
        <div className="flex-1 min-w-0">
          <nav className="mb-8 text-[14px] text-[var(--text-secondary)]">
            <Link to="/" className="hover:text-[var(--accent-primary)]">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/learn" className="hover:text-[var(--accent-primary)]">Learn</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--text-primary)]">Level {level.id}</span>
          </nav>

          <header className="mb-10">
            <h1 className="font-display text-3xl font-bold text-[var(--text-primary)]">
              Level {level.id}: {level.title}
            </h1>
            <p className="mt-2 text-[var(--text-secondary)] text-[15px]">
              {level.description}
            </p>
          </header>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <Link
                key={module!.id}
                to={`/learn/${level.id}/${module!.slug}`}
                className="block p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] hover:-translate-y-1 hover:border-[#00D4AA40] hover:shadow-[var(--glow-teal)] transition-all duration-250"
              >
                <h2 className="font-display font-semibold text-[var(--text-primary)]">
                  {module!.title}
                </h2>
                <p className="mt-2 text-[14px] text-[var(--text-secondary)] line-clamp-2">
                  {module!.description}
                </p>
                <p className="mt-4 text-[14px] text-[var(--accent-primary)] font-semibold">
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
