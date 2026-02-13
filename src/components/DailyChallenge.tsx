import { Link } from "react-router-dom";
import { Target, Check } from "lucide-react";
import { useProgress } from "../contexts/ProgressContext";

const CHALLENGES = [
  { id: "lesson", label: "Complete 1 lesson", xp: 25 },
  { id: "quiz", label: "Pass 1 quiz", xp: 15 },
  { id: "streak", label: "Maintain a streak", xp: 10 },
];

export function DailyChallenge() {
  const { completedLessons, completedQuizzes, streakDays } = useProgress();

  const done = [
    completedLessons.length >= 1,
    Object.keys(completedQuizzes).length >= 1,
    streakDays >= 1,
  ];

  return (
    <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-4">
      <h3 className="font-semibold text-surface-900 dark:text-surface-100 mb-3 flex items-center gap-2">
        <Target className="h-5 w-5 text-primary-500" />
        Daily Challenge
      </h3>
      <p className="text-sm text-surface-500 mb-4">Complete to earn bonus XP</p>
      <ul className="space-y-2">
        {CHALLENGES.map((c, i) => (
          <li
            key={c.id}
            className={`flex items-center justify-between py-2 border-b border-surface-100 dark:border-surface-700 last:border-0 ${
              done[i] ? "opacity-75" : ""
            }`}
          >
            <span className="flex items-center gap-2">
              {done[i] ? (
                <Check className="h-4 w-4 text-bull" />
              ) : (
                <span className="w-4 h-4 rounded-full border-2 border-surface-300" />
              )}
              {c.label}
            </span>
            <span className="text-xs text-surface-500">+{c.xp} XP</span>
          </li>
        ))}
      </ul>
      <Link
        to="/learn/1"
        className="mt-4 block text-sm text-primary-500 hover:text-primary-600 font-medium"
      >
        Start learning →
      </Link>
    </div>
  );
}
