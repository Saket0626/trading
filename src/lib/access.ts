import type { UserProgress } from "../types";

const EXAM_PASS_PERCENT = 80;

const LEVEL_EXAM_IDS: Record<number, string> = {
  1: "level-1-exam",
  2: "level-2-exam",
  3: "level-3-exam",
  4: "level-4-exam",
  5: "level-5-exam",
};

export function canAccessLevel(
  levelId: number,
  getQuizScore: (id: string) => number | undefined,
  isAdmin: boolean
): boolean {
  if (isAdmin) return true;
  if (levelId === 1) return true;
  const prevLevel = levelId - 1;
  const examId = LEVEL_EXAM_IDS[prevLevel];
  if (!examId) return true;
  const score = getQuizScore(examId);
  return score !== undefined && score >= EXAM_PASS_PERCENT;
}

export function canAccessLesson(
  _lessonId: string,
  _moduleId: string,
  _levelId: number,
  _progress: UserProgress,
  isAdmin: boolean
): boolean {
  if (isAdmin) return true;
  return true;
}
