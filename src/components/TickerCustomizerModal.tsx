import { useState, useEffect } from "react";
import { X, RotateCcw } from "lucide-react";
import { useTicker } from "../contexts/TickerContext";
import {
  ALL_TICKER_OPTIONS,
  DEFAULT_TICKER,
  MIN_TICKER_ITEMS,
  MAX_TICKER_ITEMS,
  type TickerOption,
} from "../data/tickerOptions";

const TYPE_LABELS: Record<string, string> = {
  stocks: "Stocks",
  forex: "Forex",
  crypto: "Crypto",
  commodities: "Commodities",
  futures: "Futures",
};

const byType = (opts: TickerOption[]) => {
  const m: Record<string, TickerOption[]> = {};
  opts.forEach((o) => {
    if (!m[o.type]) m[o.type] = [];
    m[o.type].push(o);
  });
  return m;
};

interface TickerCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TickerCustomizerModal({ isOpen, onClose }: TickerCustomizerModalProps) {
  const { tickerItems, setTickerItems } = useTicker();
  const [selected, setSelected] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (isOpen) {
      setSelected(new Set(tickerItems.map((t) => t.symbol)));
    }
  }, [isOpen, tickerItems]);

  const toggle = (opt: TickerOption) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(opt.symbol)) {
        if (next.size <= MIN_TICKER_ITEMS) return prev;
        next.delete(opt.symbol);
      } else {
        if (next.size >= MAX_TICKER_ITEMS) return prev;
        next.add(opt.symbol);
      }
      return next;
    });
  };

  const handleSave = () => {
    const opts = ALL_TICKER_OPTIONS.filter((o) => selected.has(o.symbol));
    if (opts.length >= MIN_TICKER_ITEMS && opts.length <= MAX_TICKER_ITEMS) {
      setTickerItems(opts);
      onClose();
    }
  };

  const handleDefault = () => {
    setSelected(new Set(DEFAULT_TICKER.map((t) => t.symbol)));
  };

  if (!isOpen) return null;

  const grouped = byType(ALL_TICKER_OPTIONS);
  const count = selected.size;
  const canSave = count >= MIN_TICKER_ITEMS && count <= MAX_TICKER_ITEMS;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ticker-customizer-title"
    >
      <div className="w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-surface-200 dark:border-surface-700">
          <h2 id="ticker-customizer-title" className="font-semibold text-lg text-[var(--text-primary)]">
            Customize ticker bar
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:bg-surface-100 dark:hover:bg-surface-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="px-4 py-2 text-sm text-[var(--text-secondary)]">
          Choose {MIN_TICKER_ITEMS}–{MAX_TICKER_ITEMS} symbols for the ticker bar. Selected: {count}
        </p>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {Object.entries(grouped).map(([type, opts]) => (
            <div key={type}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                {TYPE_LABELS[type] || type}
              </h3>
              <div className="flex flex-wrap gap-2">
                {opts.map((opt) => {
                  const isChecked = selected.has(opt.symbol);
                  return (
                    <button
                      key={opt.symbol}
                      type="button"
                      onClick={() => toggle(opt)}
                      disabled={
                        !isChecked && count >= MAX_TICKER_ITEMS
                      }
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        isChecked
                          ? "bg-[var(--accent-primary)] text-[var(--bg-primary)]"
                          : "bg-surface-100 dark:bg-surface-700 text-[var(--text-secondary)] hover:bg-surface-200 dark:hover:bg-surface-600 disabled:opacity-50 disabled:cursor-not-allowed"
                      }`}
                    >
                      {opt.symbol}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 p-4 border-t border-surface-200 dark:border-surface-700">
          <button
            type="button"
            onClick={handleDefault}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-surface-200 dark:border-surface-600 text-[var(--text-secondary)] hover:bg-surface-100 dark:hover:bg-surface-700"
          >
            <RotateCcw className="h-4 w-4" />
            Default
          </button>
          <div className="flex gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg text-[var(--text-secondary)] hover:bg-surface-100 dark:hover:bg-surface-700">
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={!canSave}
              className="px-4 py-2 rounded-lg bg-[var(--accent-primary)] text-[var(--bg-primary)] font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
