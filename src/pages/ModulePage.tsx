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
      <div className="max-w-[1200px] mx-auto px-8 py-12">
        <p className="text-[var(--text-primary)]">Module not found.</p>
        <Link to="/learn" className="text-[var(--accent-primary)] hover:underline">
          Back to Learn
        </Link>
      </div>
    );
  }

  const lessons = getLessonsByModule(module_.id);

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
            <Link to={`/learn/${levelId}`} className="hover:text-[var(--accent-primary)]">
              Level {levelId}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--text-primary)]">{module_.title}</span>
          </nav>

          <header className="mb-10">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
              {module_.title}
            </h1>
            <p className="mt-2 text-[var(--text-secondary)] text-lg">
              {module_.description}
            </p>
          </header>

          <div className="space-y-3 max-w-3xl">
            {lessons.length === 0 ? (
              <div className="p-8 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-center text-[var(--text-secondary)]">
                <p>Lessons for this module are coming soon. Check back as we expand the curriculum!</p>
              </div>
            ) : (
            lessons.map((lesson) => {
          const complete = isLessonComplete(lesson.id);
          const isExpanded = expandedLessonId === lesson.id;
          return (
            <div
              key={lesson.id}
              className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] overflow-hidden"
            >
              <div className="flex items-center gap-4 p-4 hover:bg-[var(--bg-tertiary)] transition-all duration-200">
                <Link
                  to={`/learn/${levelId}/${moduleSlug}/${lesson.slug}`}
                  className="flex items-center gap-4 flex-1 min-w-0 group"
                >
                  <div className="flex-shrink-0">
                    {complete ? (
                      <Check className="h-6 w-6 text-[var(--accent-primary)]" />
                    ) : (
                      <Circle className="h-6 w-6 text-[var(--text-secondary)]" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)]">
                      {lesson.title}
                    </h2>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {lesson.duration} • {lesson.objectives.length} objectives
                    </p>
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={() => setExpandedLessonId(isExpanded ? null : lesson.id)}
                  className="shrink-0 min-w-[100px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-[#00D4AA40] bg-[#00D4AA15] text-[var(--accent-primary)] hover:bg-[#00D4AA20] transition-all duration-200 cursor-pointer font-medium"
                  aria-expanded={isExpanded}
                  aria-label={isExpanded ? "Hide summary" : "Show summary"}
                >
                  <span className="text-sm">Summary</span>
                  {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
              </div>
              {isExpanded && (
                <div className="pb-4 pt-0 pl-4 pr-4 ml-14">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
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
            <section className="mt-12 pt-8 border-t border-[var(--border-subtle)]">
              <h2 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-4">
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
