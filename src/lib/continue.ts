import { allLessons } from "../data/lessons";
import { MODULES } from "../data/curriculum";

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
