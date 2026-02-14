import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MODULES } from "../data/curriculum";
import { getLessonsByModule } from "../data/lessons";
import { getLessonSummary } from "../data/lessonSummaries";
import { useProgress } from "../contexts/ProgressContext";
import { Check, Circle, ChevronDown, ChevronUp } from "lucide-react";
import { LearnSidebar } from "../components/learn/LearnSidebar";
import { Flashcards } from "../components/learn/Flashcards";
import { getFlashcardsForModule } from "../data/moduleFlashcards";

export function ModulePage() {
  const { levelId, moduleSlug } = useParams<{ levelId: string; moduleSlug: string }>();
  const module_ = MODULES.find((m) => m.slug === moduleSlug && m.level === parseInt(levelId || "1"));
  const { isLessonComplete } = useProgress();
  const [expandedLessonId, setExpandedLessonId] = useState<string | null>(null);

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
      <div className="flex gap-8">
        <LearnSidebar />
        <div className="flex-1 min-w-0">
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
          const isExpanded = expandedLessonId === lesson.id;
          return (
            <div
              key={lesson.id}
              className="rounded-lg border border-surface-200 dark:border-surface-700 overflow-hidden"
            >
              <div className="flex items-center gap-4 p-4 hover:bg-surface-50 dark:hover:bg-surface-800/50 transition-all">
                <Link
                  to={`/learn/${levelId}/${moduleSlug}/${lesson.slug}`}
                  className="flex items-center gap-4 flex-1 min-w-0 group"
                >
                  <div className="flex-shrink-0">
                    {complete ? (
                      <Check className="h-6 w-6 text-emerald-500" />
                    ) : (
                      <Circle className="h-6 w-6 text-surface-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold text-surface-900 dark:text-surface-100 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                      {lesson.title}
                    </h2>
                    <p className="text-sm text-surface-600 dark:text-surface-400">
                      {lesson.duration} • {lesson.objectives.length} objectives
                    </p>
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setExpandedLessonId(isExpanded ? null : lesson.id);
                  }}
                  className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 hover:border-primary-400 dark:hover:border-primary-500 transition-colors"
                  aria-expanded={isExpanded}
                  aria-label={isExpanded ? "Hide summary" : "Show summary"}
                >
                  <span className="text-sm font-medium">Summary</span>
                  {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
              </div>
              {isExpanded && (
                <div className="pb-4 pt-0 pl-4 pr-4 ml-14">
                  <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed">
                    {getLessonSummary(lesson)}
                  </p>
                </div>
              )}
            </div>
          );
        })
        )}
      </div>

          {/* Chapter Flashcards */}
          {lessons.length > 0 && (
            <section className="mt-12 pt-8 border-t border-surface-200 dark:border-surface-700">
              <h2 className="font-display text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
                Chapter Flashcards
              </h2>
              <Flashcards
                cards={getFlashcardsForModule(module_.slug)}
                title={`${module_.title} - Review`}
              />
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
