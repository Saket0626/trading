import { useState } from "react";
import type { QuizQuestion } from "../../types";
import { ChevronRight, Check, X } from "lucide-react";
import { clsx } from "clsx";

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
  minPassScore?: number;
}

export function Quiz({ questions, onComplete }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

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
      const finalCorrect = selectedIndex === question.correctIndex ? correctCount + 1 : correctCount;
      const finalScore = Math.round((finalCorrect / questions.length) * 100);
      setFinished(true);
      onComplete(finalScore);
    }
  };

  if (finished) return null;

  return (
    <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium text-surface-500 dark:text-surface-400">
          Question {currentIndex + 1} of {questions.length}
        </span>
        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
          Quiz
        </span>
      </div>

      <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-6">
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
