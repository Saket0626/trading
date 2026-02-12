import { Link, useParams } from "react-router-dom";
import { MODULES } from "../data/curriculum";
import { getLessonsByModule } from "../data/lessons";
import { useProgress } from "../contexts/ProgressContext";
import { Check, Circle } from "lucide-react";

export function ModulePage() {
  const { levelId, moduleSlug } = useParams<{ levelId: string; moduleSlug: string }>();
  const module_ = MODULES.find((m) => m.slug === moduleSlug && m.level === parseInt(levelId || "1"));
  const { isLessonComplete } = useProgress();

  if (!module_) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p>Module not found.</p>
        <Link to="/learn" className="text-primary-500 hover:underline">
          Back to Learn
        </Link>
      </div>
    );
  }

  const lessons = getLessonsByModule(module_.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-8 text-sm text-surface-600 dark:text-surface-400">
        <Link to="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/learn" className="hover:text-primary-500">Learn</Link>
        <span className="mx-2">/</span>
        <Link to={`/learn/${levelId}`} className="hover:text-primary-500">
          Level {levelId}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-surface-900 dark:text-surface-100">{module_.title}</span>
      </nav>

      <header className="mb-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-surface-900 dark:text-surface-100">
          {module_.title}
        </h1>
        <p className="mt-2 text-surface-600 dark:text-surface-400 text-lg">
          {module_.description}
        </p>
      </header>

      <div className="space-y-3 max-w-2xl">
        {lessons.length === 0 ? (
          <div className="p-8 rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800/50 text-center text-surface-600 dark:text-surface-400">
            <p>Lessons for this module are coming soon. Check back as we expand the curriculum!</p>
          </div>
        ) : (
        lessons.map((lesson) => {
          const complete = isLessonComplete(lesson.id);
          return (
            <Link
              key={lesson.id}
              to={`/learn/${levelId}/${moduleSlug}/${lesson.slug}`}
              className="flex items-center gap-4 p-4 rounded-lg border border-surface-200 dark:border-surface-700 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-surface-50 dark:hover:bg-surface-800/50 transition-all"
            >
              <div className="flex-shrink-0">
                {complete ? (
                  <Check className="h-6 w-6 text-emerald-500" />
                ) : (
                  <Circle className="h-6 w-6 text-surface-400" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-surface-900 dark:text-surface-100">
                  {lesson.title}
                </h2>
                <p className="text-sm text-surface-600 dark:text-surface-400">
                  {lesson.duration} • {lesson.objectives.length} objectives
                </p>
              </div>
            </Link>
          );
        })
        )}
      </div>
    </div>
  );
}
