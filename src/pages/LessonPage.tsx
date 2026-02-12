import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getLessonBySlug, getLessonsByModule } from "../data/lessons";
import { level1Quizzes } from "../data/quizzes/level1";
import { level2Quizzes } from "../data/quizzes/level2";
import { level3Quizzes, level4Quizzes, level5Quizzes } from "../data/quizzes/level3-4-5";
import { useProgress } from "../contexts/ProgressContext";
import { LessonContentBlock } from "../components/lesson/LessonContent";
import { Quiz } from "../components/quiz/Quiz";
import { QuizResults } from "../components/quiz/QuizResults";
import { QuizErrorBoundary } from "../components/quiz/QuizErrorBoundary";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { MODULES } from "../data/curriculum";

export function LessonPage() {
  const { levelId, moduleSlug, lessonSlug } = useParams<{
    levelId: string;
    moduleSlug: string;
    lessonSlug: string;
  }>();
  const { completeLesson, completeQuiz, isLessonComplete } = useProgress();

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

  const handleMarkComplete = () => {
    completeLesson(lesson.id);
  };

  const handleQuizComplete = (score: number) => {
    setQuizStateForLesson({ lessonId: lesson.id, score });
    completeQuiz(lesson.id, score);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
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

      <article>
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
          {lesson.content.map((block, i) => (
            <LessonContentBlock key={i} block={block} />
          ))}
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
                />
              )}
            </QuizErrorBoundary>
          </section>
        )}

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-surface-200 dark:border-surface-700">
          <button
            onClick={handleMarkComplete}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
          >
            {isLessonComplete(lesson.id) ? (
              <>
                <Check className="h-5 w-5" />
                Completed
              </>
            ) : (
              "Mark as Complete"
            )}
          </button>

          <div className="flex gap-2">
            {prevLesson ? (
              <a
                href={`/learn/${levelId}/${moduleSlug}/${prevLesson.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
              >
                <ChevronLeft className="h-5 w-5" />
                Previous
              </a>
            ) : null}
            {nextLesson ? (
              <a
                href={`/learn/${levelId}/${moduleSlug}/${nextLesson.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-surface-200 dark:bg-surface-700 hover:bg-surface-300 dark:hover:bg-surface-600 font-semibold rounded-lg transition-colors"
              >
                Next: {nextLesson.title}
                <ChevronRight className="h-5 w-5" />
              </a>
            ) : (
              <a
                href={`/learn/${levelId}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-surface-200 dark:bg-surface-700 hover:bg-surface-300 dark:hover:bg-surface-600 font-semibold rounded-lg transition-colors"
              >
                Back to Level {levelId}
                <ChevronRight className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
