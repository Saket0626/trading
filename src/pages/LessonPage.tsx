import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getLessonBySlug, getLessonsByModule } from "../data/lessons";
import { level1Quizzes } from "../data/quizzes/level1";
import { level2Quizzes } from "../data/quizzes/level2";
import { useProgress } from "../contexts/ProgressContext";
import { LessonContentBlock } from "../components/lesson/LessonContent";
import { Quiz } from "../components/quiz/Quiz";
import { QuizResults } from "../components/quiz/QuizResults";
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

  const [quizComplete, setQuizComplete] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  // Reset quiz state when navigating to a different lesson
  useEffect(() => {
    setQuizComplete(false);
    setQuizScore(null);
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

  const quizQuestions = level1Quizzes[lesson.id] || level2Quizzes[lesson.id] || [];
  const hasQuiz = lesson.hasQuiz && quizQuestions.length > 0; // Only show quiz if we have questions
  const showQuizResults = quizComplete && quizScore !== null;

  const handleMarkComplete = () => {
    completeLesson(lesson.id);
  };

  const handleQuizComplete = (score: number) => {
    setQuizScore(score);
    setQuizComplete(true);
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
          <section className="mt-12">
            <h2 className="font-display text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
              Knowledge Check
            </h2>
            {showQuizResults ? (
              <QuizResults
                score={quizScore ?? 0}
                totalQuestions={quizQuestions.length}
                minPassScore={80}
              />
            ) : (
              <Quiz questions={quizQuestions} onComplete={handleQuizComplete} minPassScore={80} />
            )}
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
    </div>
  );
}
