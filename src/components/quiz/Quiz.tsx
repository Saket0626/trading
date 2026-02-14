import { useState, useEffect, useCallback } from "react";
import type { QuizQuestion } from "../../types";
import { ChevronRight, Check, X, Zap, CheckCircle } from "lucide-react";
import { clsx } from "clsx";

function validateScore(score: number): number {
  if (typeof score !== "number" || Number.isNaN(score)) return 0;
  if (score < 0) return 0;
  if (score > 100) return 100;
  return Math.round(score);
}

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
  minPassScore?: number;
  isAdmin?: boolean;
}

export function Quiz({ questions, onComplete, isAdmin }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const resetQuiz = useCallback(() => {
    setCurrentIndex(0);
    setSelectedIndex(null);
    setShowExplanation(false);
    setCorrectCount(0);
    setFinished(false);
  }, []);

  // Reset all state when questions change (e.g. new lesson)
  useEffect(() => {
    resetQuiz();
  }, [questions.length, resetQuiz]);

  if (!questions || questions.length === 0) {
    return (
      <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 md:p-8 text-center text-[var(--text-secondary)]">
        No quiz available for this lesson.
      </div>
    );
  }

  const question = questions[currentIndex];
  const hasAnswered = selectedIndex !== null;

  const handleSelect = (index: number) => {
    if (hasAnswered) return;
    setSelectedIndex(index);
    setShowExplanation(true);
    if (index === question.correctIndex) {
      setCorrectCount((c) => c + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedIndex(null);
      setShowExplanation(false);
    } else {
      // correctCount already includes the current question (handleSelect incremented it)
      const rawScore = Math.round((correctCount / questions.length) * 100);
      const finalScore = validateScore(rawScore);
      setFinished(true);
      onComplete(finalScore);
    }
  };

  if (finished) return null;

  return (
    <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 md:p-8">
      {isAdmin && (
        <div className="flex flex-wrap gap-2 mb-4 p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
          <button
            type="button"
            onClick={() => onComplete(100)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg bg-orange-500 hover:bg-orange-600 text-orange-950"
          >
            <Zap className="h-4 w-4" />
            Skip Quiz (Admin)
          </button>
          <button
            type="button"
            onClick={() => onComplete(100)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg bg-orange-600 hover:bg-orange-700 text-orange-50"
          >
            <CheckCircle className="h-4 w-4" />
            Auto-Complete 100%
          </button>
        </div>
      )}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium text-[var(--text-secondary)]">
          Question {currentIndex + 1} of {questions.length}
        </span>
        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
          Quiz
        </span>
      </div>

      <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-6">
        {question.question}
      </h3>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            disabled={hasAnswered}
            className={clsx(
              "w-full text-left p-4 rounded-lg border-2 transition-all",
              !hasAnswered &&
                "hover:border-primary-400 dark:hover:border-primary-500 hover:bg-surface-50 dark:hover:bg-surface-700/50",
              hasAnswered &&
                index === question.correctIndex &&
                "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20",
              hasAnswered &&
                index === selectedIndex &&
                index !== question.correctIndex &&
                "border-red-500 bg-red-50 dark:bg-red-900/20",
              hasAnswered &&
                index !== selectedIndex &&
                index !== question.correctIndex &&
                "border-surface-200 dark:border-surface-600 opacity-60"
            )}
          >
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-surface-200 dark:bg-surface-600 flex items-center justify-center text-sm font-medium">
                {String.fromCharCode(65 + index)}
              </span>
              <span>{option}</span>
              {hasAnswered && index === question.correctIndex && (
                <Check className="h-5 w-5 text-emerald-500 ml-auto" />
              )}
              {hasAnswered && index === selectedIndex && index !== question.correctIndex && (
                <X className="h-5 w-5 text-red-500 ml-auto" />
              )}
            </div>
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="mt-6 p-4 rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800">
          <p className="text-sm font-medium text-primary-900 dark:text-primary-100 mb-1">
            Explanation
          </p>
          <p className="text-sm text-primary-800 dark:text-primary-200">
            {question.explanation}
          </p>
        </div>
      )}

      {hasAnswered && (
        <button
          onClick={handleNext}
          className="mt-6 flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
        >
          {currentIndex < questions.length - 1 ? "Next Question" : "See Results"}
          <ChevronRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
