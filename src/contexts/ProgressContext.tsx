import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import type { ReactNode } from "react";
import type { UserProgress } from "../types";
import { trackProgressUpdate } from "../lib/analytics";

const STORAGE_KEY = "trading-edu-progress";

const defaultProgress: UserProgress = {
  completedLessons: [],
  completedQuizzes: {},
  xp: 0,
  badges: [],
  lastActivity: new Date().toISOString(),
};

interface ProgressContextType extends UserProgress {
  completeLesson: (lessonId: string) => void;
  completeQuiz: (lessonId: string, score: number) => void;
  addXP: (amount: number) => void;
  addBadge: (badgeId: string) => void;
  setUsername: (username: string) => void;
  isLessonComplete: (lessonId: string) => boolean;
  getQuizScore: (lessonId: string) => number | undefined;
  streakDays: number;
}

const ProgressContext = createContext<ProgressContextType | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return { ...defaultProgress, ...JSON.parse(stored) };
      }
    } catch {
      console.warn("Failed to load progress from localStorage");
    }
    return defaultProgress;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      trackProgressUpdate(progress.completedLessons);
    } catch {
      console.warn("Failed to save progress to localStorage");
    }
  }, [progress]);

  const updateStreakAndDate = (prev: UserProgress) => {
    const today = new Date().toISOString().slice(0, 10);
    const last = prev.lastCompletedDate;
    let streak = prev.streakDays ?? 0;
    if (last === today) return { lastCompletedDate: today, streakDays: streak };
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().slice(0, 10);
    if (last === yesterdayStr) streak = (streak || 0) + 1;
    else streak = 1;
    return { lastCompletedDate: today, streakDays: streak };
  };

  const completeLesson = useCallback((lessonId: string) => {
    setProgress((prev) => {
      const alreadyDone = prev.completedLessons.includes(lessonId);
      const newLessons = alreadyDone ? prev.completedLessons : [...prev.completedLessons, lessonId];
      let newBadges = [...prev.badges];
      if (!alreadyDone && newLessons.length === 1 && !newBadges.includes("first-lesson")) {
        newBadges = [...newBadges, "first-lesson"];
      }
      if (!alreadyDone && newLessons.length >= 10 && !newBadges.includes("dedicated")) {
        newBadges = [...newBadges, "dedicated"];
      }
      const { lastCompletedDate, streakDays } = updateStreakAndDate(prev);
      if (streakDays >= 7 && !newBadges.includes("streak-7")) {
        newBadges = [...newBadges, "streak-7"];
      }
      const candlestickCount = newLessons.filter((id) =>
        ["candlestick-anatomy", "candlestick-bullish", "candlestick-bearish", "doji", "hammer", "engulfing"].includes(id)
      ).length;
      if (candlestickCount >= 3 && !newBadges.includes("pattern-master")) {
        newBadges = [...newBadges, "pattern-master"];
      }
      const riskLesson = newLessons.some((id) => id.startsWith("risk-") || id.includes("position-sizing"));
      if (riskLesson && !newBadges.includes("risk-manager")) {
        newBadges = [...newBadges, "risk-manager"];
      }
      return {
        ...prev,
        completedLessons: newLessons,
        badges: newBadges,
        xp: prev.xp + (alreadyDone ? 0 : 50),
        lastActivity: new Date().toISOString(),
        lastCompletedDate,
        streakDays,
      };
    });
  }, []);

  const completeQuiz = useCallback((lessonId: string, score: number) => {
    setProgress((prev) => {
      const passed = score >= 80;
      let newBadges = [...prev.badges];
      const quizCount = Object.keys({ ...prev.completedQuizzes, [lessonId]: score }).length;
      if (passed && quizCount === 1 && !newBadges.includes("first-quiz")) {
        newBadges = [...newBadges, "first-quiz"];
      }
      if (passed && quizCount >= 5 && !newBadges.includes("quiz-master")) {
        newBadges = [...newBadges, "quiz-master"];
      }
      const { lastCompletedDate, streakDays } = updateStreakAndDate(prev);
      return {
        ...prev,
        completedQuizzes: { ...prev.completedQuizzes, [lessonId]: score },
        badges: newBadges,
        xp: prev.xp + Math.floor(score / 10),
        lastActivity: new Date().toISOString(),
        lastCompletedDate,
        streakDays,
      };
    });
  }, []);

  const addXP = useCallback((amount: number) => {
    setProgress((prev) => ({
      ...prev,
      xp: prev.xp + amount,
      lastActivity: new Date().toISOString(),
    }));
  }, []);

  const addBadge = useCallback((badgeId: string) => {
    setProgress((prev) => ({
      ...prev,
      badges: prev.badges.includes(badgeId)
        ? prev.badges
        : [...prev.badges, badgeId],
      lastActivity: new Date().toISOString(),
    }));
  }, []);

  const setUsername = useCallback((username: string) => {
    setProgress((prev) => ({
      ...prev,
      username: username.trim().slice(0, 32) || undefined,
      lastActivity: new Date().toISOString(),
    }));
  }, []);

  const isLessonComplete = useCallback(
    (lessonId: string) => progress.completedLessons.includes(lessonId),
    [progress.completedLessons]
  );

  const getQuizScore = useCallback(
    (lessonId: string) => progress.completedQuizzes[lessonId],
    [progress.completedQuizzes]
  );

  const streakDays = progress.streakDays ?? 0;

  return (
    <ProgressContext.Provider
      value={{
        ...progress,
        streakDays,
        completeLesson,
        completeQuiz,
        addXP,
        addBadge,
        setUsername,
        isLessonComplete,
        getQuizScore,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within ProgressProvider");
  }
  return context;
}
