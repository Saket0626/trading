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
import { movingAveragesLessons } from "./level3-moving-averages";
import { momentumLessons } from "./level3-momentum";
import { volatilityLessons } from "./level3-volatility";
import { riskManagementLessons } from "./level3-risk-management";
import { fundamentalAnalysisLessons } from "./level3-fundamental-analysis";
import { tradingPsychologyLessons } from "./level3-trading-psychology";
import { dayTradingFundamentalsLessons } from "./level3-day-trading-fundamentals";
import { tradingPlanLessons } from "./level3-trading-plan";
import { dayTradingStrategiesLessons } from "./level3-day-trading-strategies";
import { brokerSelectionLessons } from "./level3-broker-selection";
import { marketMechanicsLessons } from "./level3-market-mechanics";
import { tradingCostsLessons } from "./level3-trading-costs";
import { level4OptionsLessons } from "./level4-options";
import { level4DerivativesLessons } from "./level4-derivatives";
import { level4PortfolioLessons } from "./level4-portfolio";
import { level4AdvancedTechnicalLessons } from "./level4-advanced-technical";
import { level4IntermarketLessons } from "./level4-intermarket";
import { level5PythonLessons } from "./level5-python";
import { level5DataAcquisitionLessons } from "./level5-data-acquisition";
import { level5BacktestingLessons } from "./level5-backtesting";
import { level5QuantStrategiesLessons } from "./level5-quant-strategies";
import { level5MLLessons } from "./level5-ml";
import { level5RiskMetricsLessons } from "./level5-risk-metrics";
import { level5AutomatedLessons } from "./level5-automated";

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
  ...movingAveragesLessons,
  ...momentumLessons,
  ...volatilityLessons,
  ...riskManagementLessons,
  ...fundamentalAnalysisLessons,
  ...tradingPsychologyLessons,
  ...dayTradingFundamentalsLessons,
  ...tradingPlanLessons,
  ...dayTradingStrategiesLessons,
  ...brokerSelectionLessons,
  ...marketMechanicsLessons,
  ...tradingCostsLessons,
  level3ExamLesson,
  ...level4OptionsLessons,
  ...level4DerivativesLessons,
  ...level4PortfolioLessons,
  ...level4AdvancedTechnicalLessons,
  ...level4IntermarketLessons,
  level4ExamLesson,
  ...level5PythonLessons,
  ...level5DataAcquisitionLessons,
  ...level5BacktestingLessons,
  ...level5QuantStrategiesLessons,
  ...level5MLLessons,
  ...level5RiskMetricsLessons,
  ...level5AutomatedLessons,
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
