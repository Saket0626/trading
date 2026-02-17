import { useState, useEffect, useCallback } from "react";
import { User, Save } from "lucide-react";
import { useProgress } from "../contexts/ProgressContext";
import { useTicker } from "../contexts/TickerContext";
import { isLeaderboardEnabled } from "../lib/supabase";
import { getEffectiveLeaderboardLessonsCount } from "../lib/continue";
import { checkUsernameAvailable, getLeaderboardUserId } from "../services/leaderboard";

const LESSONS_THRESHOLD = 2;

const DISMISSED_KEY = "chartwise-username-prompt-dismissed";

export function UsernamePromptModal() {
  const { completedLessons, username, setUsername, getQuizScore } = useProgress();
  const effectiveLeaderboardCount = getEffectiveLeaderboardLessonsCount(completedLessons, getQuizScore);
  const { openCustomizer } = useTicker();
  const [dismissed, setDismissed] = useState(() => {
    try {
      return localStorage.getItem(DISMISSED_KEY) === "1";
    } catch {
      return false;
    }
  });
  const [usernameInput, setUsernameInput] = useState("");
  const [usernameSaved, setUsernameSaved] = useState(false);
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const leaderboardEnabled = isLeaderboardEnabled();
  const userId = getLeaderboardUserId();

  const shouldShow =
    !dismissed &&
    leaderboardEnabled &&
    effectiveLeaderboardCount >= LESSONS_THRESHOLD &&
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
    openCustomizer();
  }, [usernameInput, userId, setUsername, openCustomizer]);

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
                className="font-semibold text-lg text-[var(--text-primary)]"
              >
                You&apos;re making great progress!
              </h2>
              <p
                id="username-prompt-desc"
                className="mt-1 text-sm text-[var(--text-secondary)]"
              >
                You&apos;ve completed {effectiveLeaderboardCount} lessons. Choose a username to join the leaderboard and compete with other learners.
              </p>
            </div>
          </div>

            <div className="flex justify-end mb-3">
              <button
                type="button"
                onClick={() => {
                  setDismissed(true);
                  try {
                    localStorage.setItem(DISMISSED_KEY, "1");
                  } catch {}
                }}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                Skip for now
              </button>
            </div>
            <div className="space-y-3">
            <label
              htmlFor="username-prompt-input"
              className="block text-sm font-medium text-[var(--text-primary)]"
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
                className={`flex-1 px-4 py-2 rounded-lg border bg-[var(--bg-tertiary)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-[var(--accent-primary)] ${
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
