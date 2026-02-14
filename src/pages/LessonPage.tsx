import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getLessonBySlug, getLessonsByModule } from "../data/lessons";
import { level1Quizzes } from "../data/quizzes/level1";
import { level2Quizzes } from "../data/quizzes/level2";
import { level3Quizzes, level4Quizzes, level5Quizzes } from "../data/quizzes/level3-4-5";
import { useProgress } from "../contexts/ProgressContext";
import { useAdmin } from "../contexts/AdminContext";
import { trackQuizAttempt } from "../lib/analytics";
import { LessonContentBlock } from "../components/lesson/LessonContent";
import { LessonTOC } from "../components/lesson/LessonTOC";
import { LessonQuickRef } from "../components/lesson/LessonQuickRef";
import { Quiz } from "../components/quiz/Quiz";
import { QuizResults } from "../components/quiz/QuizResults";
import { QuizErrorBoundary } from "../components/quiz/QuizErrorBoundary";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MODULES } from "../data/curriculum";
import { LearnSidebar } from "../components/learn/LearnSidebar";

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function LessonPage() {
  const { levelId, moduleSlug, lessonSlug } = useParams<{
    levelId: string;
    moduleSlug: string;
    lessonSlug: string;
  }>();
  const { completeLesson, completeQuiz } = useProgress();
  const { isAdmin } = useAdmin();

  const lesson = getLessonBySlug(lessonSlug || "");

  // Tie quiz state to lesson id so it never persists across lessons (no stale state)
  const [quizStateForLesson, setQuizStateForLesson] = useState<{
    lessonId: string;
    score: number;
  } | null>(null);

  // Scroll to top when lesson changes (e.g. client-side nav) so quiz is in view
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [lesson?.id]);

  if (!lesson) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p>Lesson not found.</p>
        <Link to="/learn" className="text-primary-500 hover:underline">
          Back to Learn
        </Link>
      </div>
    );
  }

  const module_ = MODULES.find((m) => m.id === lesson.moduleId);
  const allLessonsInModule = getLessonsByModule(lesson.moduleId);
  const currentIndex = allLessonsInModule.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? allLessonsInModule[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < allLessonsInModule.length - 1 ? allLessonsInModule[currentIndex + 1] : null;

  const quizQuestions =
    level1Quizzes[lesson.id] ||
    level2Quizzes[lesson.id] ||
    level3Quizzes[lesson.id] ||
    level4Quizzes[lesson.id] ||
    level5Quizzes[lesson.id] ||
    [];
  const hasQuiz = lesson.hasQuiz && quizQuestions.length > 0; // Only show quiz if we have questions
  const showQuizResults =
    quizStateForLesson !== null && quizStateForLesson.lessonId === lesson.id;

  const handleQuizComplete = (score: number) => {
    trackQuizAttempt(lesson.id, score);
    setQuizStateForLesson({ lessonId: lesson.id, score });
    completeQuiz(lesson.id, score);
    if (score === 100) completeLesson(lesson.id);
  };

  const tocItems = lesson.content
    .map((block, i) => {
      const heading = block.heading;
      if (!heading) return null;
      const id = `s-${i}-${slugify(heading)}`;
      return { id, title: heading };
    })
    .filter((x): x is { id: string; title: string } => Boolean(x));

  const [scrollProgress, setScrollProgress] = useState(0);

  // Update scroll progress bar (no auto-complete)
  useEffect(() => {
    if (!lesson) return;
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      setScrollProgress(pct);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [lesson?.id]);

  return (
    <div className="min-h-screen">
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-500/20 z-50"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full bg-primary-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

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
        <Link
          to={`/learn/${levelId}/${moduleSlug}`}
          className="hover:text-primary-500"
        >
          {module_?.title}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-surface-900 dark:text-surface-100">{lesson.title}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* TOC sidebar - 20% on desktop */}
        {(tocItems.length > 0 || lesson) && (
          <aside className="lg:w-56 flex-shrink-0 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              <LessonQuickRef
                lesson={lesson}
                levelId={levelId || "1"}
                moduleSlug={moduleSlug || ""}
                nextLesson={nextLesson}
              />
              {tocItems.length > 0 && <LessonTOC items={tocItems} />}
            </div>
          </aside>
        )}

        {/* Main content - 60% - 18px min font, 1.6 line spacing for readability */}
        <article className={`flex-1 min-w-0 text-lg leading-relaxed ${tocItems.length > 0 ? "lg:max-w-[60%]" : "max-w-3xl"}`}>
        <header className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-surface-900 dark:text-surface-100">
            {lesson.title}
          </h1>
          <p className="mt-2 text-surface-600 dark:text-surface-400">
            {lesson.duration} • {lesson.objectives.length} objectives
          </p>
          <div className="mt-4">
            <h3 className="text-sm font-semibold text-surface-700 dark:text-surface-300 mb-2">
              What you'll learn
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-surface-600 dark:text-surface-400">
              {lesson.objectives.map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          </div>
        </header>

        <div className="space-y-2">
          {lesson.content.map((block, i) => {
            const heading = block.heading;
            const sectionId = heading ? `s-${i}-${slugify(heading)}` : undefined;
            return <LessonContentBlock key={i} block={block} sectionId={sectionId} />;
          })}
        </div>

        {hasQuiz && (
          <section className="mt-12" key={lesson.id}>
            <h2 className="font-display text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
              Knowledge Check
            </h2>
            <QuizErrorBoundary>
              {showQuizResults ? (
                <QuizResults
                  key={`${lesson.id}-results`}
                  score={quizStateForLesson?.score ?? 0}
                  totalQuestions={quizQuestions.length}
                  minPassScore={80}
                />
              ) : (
                <Quiz
                  key={`${lesson.id}-quiz`}
                  questions={quizQuestions}
                  onComplete={handleQuizComplete}
                  minPassScore={80}
                  isAdmin={isAdmin}
                />
              )}
            </QuizErrorBoundary>
          </section>
        )}

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-end gap-4 pt-8 border-t border-surface-200 dark:border-surface-700">
          <div className="flex gap-2">
            {prevLesson ? (
              <Link
                to={`/learn/${levelId}/${moduleSlug}/${prevLesson.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
              >
                <ChevronLeft className="h-5 w-5" />
                Previous
              </Link>
            ) : null}
            {nextLesson ? (
              <Link
                to={`/learn/${levelId}/${moduleSlug}/${nextLesson.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-surface-200 dark:bg-surface-700 hover:bg-surface-300 dark:hover:bg-surface-600 font-semibold rounded-lg transition-colors"
              >
                Next: {nextLesson.title}
                <ChevronRight className="h-5 w-5" />
              </Link>
            ) : (
              <Link
                to={`/learn/${levelId}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-surface-200 dark:bg-surface-700 hover:bg-surface-300 dark:hover:bg-surface-600 font-semibold rounded-lg transition-colors"
              >
                Back to Level {levelId}
                <ChevronRight className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </article>

        {/* Quick reference - 20% on desktop */}
        <aside className="lg:w-56 flex-shrink-0 order-3 hidden xl:block">
          <div className="sticky top-24 p-4 rounded-lg border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900/50">
            <p className="text-xs font-semibold uppercase text-surface-500 dark:text-surface-400 mb-3">
              Quick reference
            </p>
            <p className="text-sm text-surface-600 dark:text-surface-400">
              {lesson.duration} • {lesson.objectives.length} objectives
            </p>
            {lesson.prerequisites && lesson.prerequisites.length > 0 && (
              <p className="mt-3 text-xs text-surface-500 dark:text-surface-400">
                Prerequisites: {lesson.prerequisites.join(", ")}
              </p>
            )}
            <Link
              to={`/learn/${levelId}/${moduleSlug}`}
              className="mt-4 block text-sm text-primary-500 hover:text-primary-600"
            >
              ← Back to {module_?.title}
            </Link>
            {nextLesson && (
              <Link
                to={`/learn/${levelId}/${moduleSlug}/${nextLesson.slug}`}
                className="mt-2 block text-sm text-primary-500 hover:text-primary-600"
              >
                Next: {nextLesson.title} →
              </Link>
            )}
          </div>
        </aside>
      </div>
        </div>
      </div>
    </div>
    </div>
  );
}
