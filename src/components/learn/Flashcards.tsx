import { useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

export interface Flashcard {
  front: string;
  back: string;
}

export interface FlashcardsProps {
  cards?: Flashcard[];
  title?: string;
}

export function Flashcards({ cards = [], title = "Chapter Flashcards" }: FlashcardsProps) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (!cards.length) return null;

  const card = cards[index];
  const canPrev = index > 0;
  const canNext = index < cards.length - 1;

  const handlePrev = () => {
    setIndex((i) => Math.max(0, i - 1));
    setFlipped(false);
  };
  const handleNext = () => {
    setIndex((i) => Math.min(cards.length - 1, i + 1));
    setFlipped(false);
  };

  return (
    <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 overflow-hidden">
      <div className="px-4 py-3 border-b border-surface-200 dark:border-surface-700 flex items-center justify-between">
        <h3 className="font-semibold text-[var(--text-primary)]">{title}</h3>
        <span className="text-sm text-[var(--text-secondary)]">
          {index + 1} / {cards.length}
        </span>
      </div>
      <div className="p-6">
        <button
          onClick={() => setFlipped((f) => !f)}
          className="w-full min-h-[140px] rounded-lg border-2 border-dashed border-surface-300 dark:border-surface-600 bg-surface-50 dark:bg-surface-700/50 hover:border-primary-400 dark:hover:border-primary-500 transition-colors text-left p-6 group"
        >
          {flipped ? (
            <p className="text-[var(--text-primary)]">{card.back}</p>
          ) : (
            <>
              <p className="text-[var(--text-primary)] font-medium">
                {card.front}
              </p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Click to flip</p>
            </>
          )}
        </button>
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={handlePrev}
            disabled={!canPrev}
            className="flex items-center gap-1 px-3 py-2 rounded-lg text-[var(--text-secondary)] hover:bg-surface-100 dark:hover:bg-surface-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
            Prev
          </button>
          <button
            onClick={() => setFlipped(false)}
            className="flex items-center gap-1 px-3 py-2 rounded-lg text-[var(--text-secondary)] hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
            title="Reset flip"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
          <button
            onClick={handleNext}
            disabled={!canNext}
            className="flex items-center gap-1 px-3 py-2 rounded-lg text-[var(--text-secondary)] hover:bg-surface-100 dark:hover:bg-surface-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
