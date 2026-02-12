import { Trophy, BookOpen, Target } from "lucide-react";
import { useProgress } from "../contexts/ProgressContext";

export function ProgressPage() {
  const { xp, completedLessons, badges } = useProgress();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-display text-3xl font-bold text-surface-900 dark:text-surface-100 mb-2">
        Your Progress
      </h1>
      <p className="text-surface-600 dark:text-surface-400 mb-12">
        Track your learning journey and earned achievements.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <Trophy className="h-7 w-7 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <p className="text-3xl font-bold text-surface-900 dark:text-surface-100">{xp}</p>
              <p className="text-sm text-surface-600 dark:text-surface-400">XP Earned</p>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
              <BookOpen className="h-7 w-7 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <p className="text-3xl font-bold text-surface-900 dark:text-surface-100">
                {completedLessons.length}
              </p>
              <p className="text-sm text-surface-600 dark:text-surface-400">Lessons Completed</p>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
              <Target className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-3xl font-bold text-surface-900 dark:text-surface-100">
                {badges.length}
              </p>
              <p className="text-sm text-surface-600 dark:text-surface-400">Badges Earned</p>
            </div>
          </div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="font-semibold text-lg text-surface-900 dark:text-surface-100 mb-4">
          Badges
        </h2>
        <div className="flex flex-wrap gap-3">
          {(["first-lesson", "first-quiz", "dedicated", "quiz-master"] as const).map((id) => {
            const labels: Record<string, string> = {
              "first-lesson": "First Lesson",
              "first-quiz": "First Quiz Passed",
              dedicated: "10 Lessons",
              "quiz-master": "5 Quizzes Passed",
            };
            const earned = badges.includes(id);
            return (
              <div
                key={id}
                className={`px-4 py-2 rounded-lg border ${
                  earned
                    ? "bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700"
                    : "bg-surface-100 dark:bg-surface-800 border-surface-200 dark:border-surface-700 opacity-60"
                }`}
              >
                <span className="font-medium">{labels[id] || id}</span>
                {earned ? (
                  <span className="ml-2 text-amber-600 dark:text-amber-400">✓</span>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="font-semibold text-lg text-surface-900 dark:text-surface-100 mb-4">
          Recent Activity
        </h2>
        {completedLessons.length === 0 ? (
          <p className="text-surface-600 dark:text-surface-400">
            Complete your first lesson to see progress here!
          </p>
        ) : (
          <p className="text-surface-600 dark:text-surface-400">
            You've completed {completedLessons.length} lesson{completedLessons.length !== 1 ? "s" : ""}.
            Keep going!
          </p>
        )}
      </section>
    </div>
  );
}
