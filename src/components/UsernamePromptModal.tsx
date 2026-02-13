import { useState, useEffect, useCallback } from "react";
import { User, Save } from "lucide-react";
import { useProgress } from "../contexts/ProgressContext";
import { isLeaderboardEnabled } from "../lib/supabase";
import { checkUsernameAvailable, getLeaderboardUserId } from "../services/leaderboard";

const LESSONS_THRESHOLD = 2;

export function UsernamePromptModal() {
  const { completedLessons, username, setUsername } = useProgress();
  const [usernameInput, setUsernameInput] = useState("");
  const [usernameSaved, setUsernameSaved] = useState(false);
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const leaderboardEnabled = isLeaderboardEnabled();
  const userId = getLeaderboardUserId();

  const shouldShow =
    leaderboardEnabled &&
    completedLessons.length >= LESSONS_THRESHOLD &&
    !username?.trim();

  const handleSave = useCallback(async () => {
    const trimmed = usernameInput.trim().slice(0, 32);
    setUsernameError(null);
    if (!trimmed) return;
    setLoading(true);
    const { available, error } = await checkUsernameAvailable(trimmed, userId);
    setLoading(false);
    if (!available) {
      setUsernameError(error ?? "Username already taken");
      return;
    }
    setUsername(trimmed);
    setUsernameSaved(true);
    setTimeout(() => setUsernameSaved(false), 2000);
  }, [usernameInput, userId, setUsername]);

  useEffect(() => {
    if (shouldShow) {
      setUsernameInput("");
      setUsernameError(null);
    }
  }, [shouldShow]);

  if (!shouldShow) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="username-prompt-title"
      aria-describedby="username-prompt-desc"
    >
      <div className="w-full max-w-md rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-xl">
        <div className="p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30">
              <User className="h-5 w-5 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <h2
                id="username-prompt-title"
                className="font-semibold text-lg text-surface-900 dark:text-surface-100"
              >
                You&apos;re making great progress!
              </h2>
              <p
                id="username-prompt-desc"
                className="mt-1 text-sm text-surface-600 dark:text-surface-400"
              >
                You&apos;ve completed {completedLessons.length} lessons. Choose a username to join the leaderboard and compete with other learners.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <label
              htmlFor="username-prompt-input"
              className="block text-sm font-medium text-surface-700 dark:text-surface-300"
            >
              Username
            </label>
            <div className="flex gap-2">
              <input
                id="username-prompt-input"
                type="text"
                value={usernameInput}
                onChange={(e) => {
                  setUsernameInput(e.target.value);
                  setUsernameError(null);
                }}
                placeholder="Enter your username"
                maxLength={32}
                autoFocus
                className={`flex-1 px-4 py-2 rounded-lg border bg-surface-50 dark:bg-surface-900 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                  usernameError
                    ? "border-red-500 dark:border-red-600"
                    : "border-surface-200 dark:border-surface-600"
                }`}
              />
              <button
                type="button"
                onClick={handleSave}
                disabled={!usernameInput.trim() || loading}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium transition-colors"
              >
                <Save className="h-4 w-4" />
                {loading ? "Checking…" : usernameSaved ? "Saved!" : "Save"}
              </button>
            </div>
            {usernameError && (
              <p className="text-sm text-red-600 dark:text-red-400">
                {usernameError}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
