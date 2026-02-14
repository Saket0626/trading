import { useState } from "react";
import { shuffleIndices } from "../../lib/shuffle";

export interface ConceptCheckProps {
  question?: string;
  options?: string[];
  correctIndex?: number;
  reveal?: string;
}

export function ConceptCheck({
  question = "What do you think happens next?",
  options,
  correctIndex = 0,
  reveal = "Consider how the concept applies in real trading.",
}: ConceptCheckProps & Record<string, unknown>) {
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [order] = useState(() =>
    options && options.length > 0 ? shuffleIndices(options.length) : []
  );

  const hasOptions = options && options.length > 0;
  const displayOrder = order.length === (options?.length ?? 0) ? order : Array.from({ length: options?.length ?? 0 }, (_, i) => i);
  const correctDisplayIdx = displayOrder.indexOf(correctIndex);
  const isCorrect = hasOptions && selected !== null && selected === correctDisplayIdx;

  return (
    <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 p-6">
      <h3 className="font-semibold text-surface-900 dark:text-surface-100 mb-3">
        Think it through
      </h3>
      <p className="text-surface-700 dark:text-surface-300 mb-4">{question}</p>

      {hasOptions && (
        <div className="space-y-2 mb-4">
          {displayOrder.map((origIdx, displayIdx) => (
            <button
              key={origIdx}
              type="button"
              onClick={() => setSelected(displayIdx)}
              className={`block w-full text-left px-4 py-2 rounded-lg border text-sm transition-colors ${
                selected === displayIdx
                  ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20"
                  : "border-surface-200 dark:border-surface-600 hover:bg-surface-100 dark:hover:bg-surface-700"
              }`}
            >
              {options![origIdx]}
            </button>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => setRevealed(true)}
        className="px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-700"
      >
        {revealed ? "Answer" : "Reveal answer"}
      </button>

      {revealed && (
        <div className="mt-4 p-4 rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800">
          <p className="text-sm text-surface-800 dark:text-surface-200">
            {reveal}
          </p>
          {hasOptions && selected !== null && (
            <p className="text-xs mt-2 text-surface-600 dark:text-surface-400">
              {isCorrect ? "You chose the best answer." : "Review the options and the explanation above."}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
