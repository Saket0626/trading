import { Trophy, RotateCcw } from "lucide-react";

/** Ensure score is always 0–100 and valid (no NaN). */
function validateScore(score: number): number {
  if (typeof score !== "number" || Number.isNaN(score)) return 0;
  if (score < 0) return 0;
  if (score > 100) return 100;
  return Math.round(score);
}

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  minPassScore?: number;
  onRetry?: () => void;
}

export function QuizResults({
  score,
  totalQuestions,
  minPassScore = 80,
  onRetry,
}: QuizResultsProps) {
  const displayScore = validateScore(score);
  const passed = displayScore >= minPassScore;
  const correctCount = Math.min(
    totalQuestions,
    Math.round((displayScore / 100) * totalQuestions)
  );

  return (
    <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-8 text-center">
      <div
        className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
          passed ? "bg-emerald-100 dark:bg-emerald-900/30" : "bg-amber-100 dark:bg-amber-900/30"
        }`}
      >
        <Trophy
          className={`h-8 w-8 ${
            passed ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"
          }`}
        />
      </div>
      <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-2">
        {passed ? "Quiz Passed!" : "Keep Practicing"}
      </h2>
      <p className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
        {displayScore}%
      </p>
      <p className="text-surface-600 dark:text-surface-400 mb-6">
        You got {correctCount} out of {totalQuestions} questions
        correct. {minPassScore}% is required to pass.
      </p>
      {!passed && onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-6 py-3 bg-surface-200 dark:bg-surface-700 hover:bg-surface-300 dark:hover:bg-surface-600 font-semibold rounded-lg transition-colors"
        >
          <RotateCcw className="h-4 w-4" />
          Try Again
        </button>
      )}
    </div>
  );
}
