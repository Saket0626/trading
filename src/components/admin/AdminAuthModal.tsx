import { useState, useCallback, useEffect } from "react";
import { X } from "lucide-react";

interface AdminAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onAttempt: (code: string) => Promise<{ success: boolean; error?: string }>;
  attemptsRemaining: number;
}

export function AdminAuthModal({
  isOpen,
  onClose,
  onSuccess,
  onAttempt,
  attemptsRemaining,
}: AdminAuthModalProps) {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      if (!code.trim()) return;
      if (attemptsRemaining <= 0) {
        setError("Too many attempts. Try again in an hour.");
        return;
      }
      setLoading(true);
      const result = await onAttempt(code.trim());
      setLoading(false);
      if (result.success) {
        setCode("");
        setError(null);
        onSuccess();
        onClose();
      } else {
        setError(result.error || "Invalid code");
      }
    },
    [code, onAttempt, onSuccess, onClose, attemptsRemaining]
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-modal-title"
    >
      <div className="w-full max-w-sm rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-surface-200 dark:border-surface-700">
          <h2 id="admin-modal-title" className="font-semibold text-surface-900 dark:text-surface-100">
            Admin Access
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded text-surface-500 hover:text-surface-700 dark:hover:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label
              htmlFor="admin-code"
              className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1"
            >
              Enter code
            </label>
            <input
              id="admin-code"
              type="password"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setError(null);
              }}
              className="w-full px-4 py-2 rounded-lg border border-surface-200 dark:border-surface-600 bg-surface-50 dark:bg-surface-900 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="••••••••••"
              autoComplete="off"
              disabled={attemptsRemaining <= 0}
              autoFocus
            />
          </div>
          {error && (
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          )}
          {attemptsRemaining > 0 && attemptsRemaining < 5 && (
            <p className="text-xs text-surface-500 dark:text-surface-400">
              {attemptsRemaining} attempt{attemptsRemaining !== 1 ? "s" : ""}{" "}
              remaining this hour
            </p>
          )}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 rounded-lg border border-surface-200 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || !code.trim() || attemptsRemaining <= 0}
              className="flex-1 px-4 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium"
            >
              {loading ? "Checking…" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
