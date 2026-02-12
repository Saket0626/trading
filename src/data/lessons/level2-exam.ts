import type { Lesson } from "../../types";

export const level2ExamLesson: Lesson = {
  id: "level-2-exam",
  title: "Level 2 Final Exam",
  slug: "level-2-exam",
  level: 2,
  moduleId: "level-2-exam",
  order: 1,
  duration: "35 min",
  objectives: [
    "Demonstrate mastery of charts, candlesticks, markets, and key levels",
    "Pass with 80% or higher to unlock Level 3",
  ],
  prerequisites: [],
  content: [
    {
      type: "text",
      heading: "About This Exam",
      content:
        "This exam has 30 questions drawn from all Level 2 modules: Understanding Charts, Candlestick Mastery, Stocks, Forex, Commodities, Crypto, Choosing Your Market, and Chart Foundations (support, resistance, trends). You need 80% (24 out of 30 correct) to pass and unlock Level 3.",
    },
    {
      type: "warning",
      heading: "Unlock Requirement",
      content:
        "Level 3 (Intermediate Trading) stays locked until you pass this exam. Review the modules if you need a refresher before taking it.",
    },
    {
      type: "key-takeaway",
      heading: "Ready?",
      content: "When you're ready, the quiz below will show all 30 questions. Good luck.",
    },
  ],
  hasQuiz: true,
};
