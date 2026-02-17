import { allLessons } from "../data/lessons";
import { LEVELS, MODULES } from "../data/curriculum";

const EXAM_PASS_PERCENT = 80;

/**
 * Computes the effective lesson count for leaderboard display.
 * When a user passes a level's final exam (80%+), all content lessons in that level
 * count toward the total, regardless of individual quiz scores.
 * For levels where the final exam is not passed, only individually completed lessons count.
 */
export function getEffectiveLeaderboardLessonsCount(
  completedLessons: string[],
  getQuizScore: (lessonId: string) => number | undefined
): number {
  let count = 0;
  for (const level of LEVELS) {
    const examId = `level-${level.id}-exam`;
    const levelModules = MODULES.filter((m) => level.moduleIds.includes(m.id));
    const allLessonIds = levelModules.flatMap((m) => m.lessonIds);
    const contentLessonIds = allLessonIds.filter((id) => id !== examId);
    const examPassed = (getQuizScore(examId) ?? 0) >= EXAM_PASS_PERCENT;

    if (examPassed) {
      count += contentLessonIds.length;
    } else {
      count += contentLessonIds.filter((id) => completedLessons.includes(id)).length;
    }
  }
  return count;
}

export function getNextLessonToContinue(completedLessons: string[]): {
  lesson: (typeof allLessons)[0];
  moduleSlug: string;
  levelId: number;
} | null {
  for (const lesson of allLessons) {
    if (!completedLessons.includes(lesson.id)) {
      const mod = MODULES.find((m) => m.id === lesson.moduleId);
      return mod ? { lesson, moduleSlug: mod.slug, levelId: lesson.level } : null;
    }
  }
  return null;
}

export function getProgressPercentage(completedLessons: string[]): number {
  if (allLessons.length === 0) return 0;
  const completed = completedLessons.filter((id) =>
    allLessons.some((l) => l.id === id)
  ).length;
  return Math.round((completed / allLessons.length) * 100);
}
