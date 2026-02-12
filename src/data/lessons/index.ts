import { level1Lessons } from "./level1";
import { candlestickLessons } from "./level2-candlestick";
import { level2RemainingLessons } from "./level2-remaining";
import { level3StubLessons } from "./level3-stub";
import { level4StubLessons, level5StubLessons } from "./level4-5-stub";

export const allLessons = [
  ...level1Lessons,
  ...candlestickLessons,
  ...level2RemainingLessons,
  ...level3StubLessons,
  ...level4StubLessons,
  ...level5StubLessons,
];

export function getLessonById(id: string) {
  return allLessons.find((l) => l.id === id);
}

export function getLessonBySlug(slug: string) {
  return allLessons.find((l) => l.slug === slug);
}

export function getLessonsByModule(moduleId: string) {
  return allLessons
    .filter((l) => l.moduleId === moduleId)
    .sort((a, b) => a.order - b.order);
}
