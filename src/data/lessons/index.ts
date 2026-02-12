import { level1Lessons } from "./level1";
import { riskRewardLessons, gettingStartedLessons, level1ExamLesson } from "./level1-risk-getting-started";
import { understandingChartsLessons } from "./level2-understanding-charts";
import { candlestickLessons } from "./level2-candlestick";
import { level2RemainingLessons } from "./level2-remaining";
import { level2ExamLesson } from "./level2-exam";
import { supportResistanceLessons, trendlinesLessons } from "./level2-support-trends";
import { stocksDeepDiveLessons } from "./level2-stocks";
import { forexDeepDiveLessons } from "./level2-forex";
import { commoditiesDeepDiveLessons } from "./level2-commodities";
import { cryptoDeepDiveLessons } from "./level2-crypto";
import { choosingMarketLessons } from "./level2-choosing-market";
import { level3ExamLesson, level4ExamLesson, level5ExamLesson } from "./level3-4-5-exams";
import { level3StubLessons } from "./level3-stub";
import { level4StubLessons, level5StubLessons } from "./level4-5-stub";

export const allLessons = [
  ...level1Lessons,
  ...riskRewardLessons,
  ...gettingStartedLessons,
  level1ExamLesson,
  ...understandingChartsLessons,
  ...candlestickLessons,
  ...level2RemainingLessons,
  ...stocksDeepDiveLessons,
  ...forexDeepDiveLessons,
  ...commoditiesDeepDiveLessons,
  ...cryptoDeepDiveLessons,
  ...choosingMarketLessons,
  ...supportResistanceLessons,
  ...trendlinesLessons,
  level2ExamLesson,
  ...level3StubLessons,
  level3ExamLesson,
  ...level4StubLessons,
  level4ExamLesson,
  ...level5StubLessons,
  level5ExamLesson,
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
