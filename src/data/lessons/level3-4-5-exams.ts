import type { Lesson } from "../../types";

const examContent = (level: number, totalQuestions: number, passPercent: number, nextLevel: string) => [
  {
    type: "text" as const,
    heading: "About This Exam",
    content: `This exam has ${totalQuestions} questions covering Level ${level} content. You need ${passPercent}% to pass and unlock ${nextLevel}. Take your time and use what you've learned.`,
  },
  {
    type: "warning" as const,
    heading: "Unlock Requirement",
    content: `${nextLevel} stays locked until you pass this exam. Review the modules if you need a refresher.`,
  },
  {
    type: "key-takeaway" as const,
    heading: "Ready?",
    content: "The quiz below will show all questions. Good luck.",
  },
];

export const level3ExamLesson: Lesson = {
  id: "level-3-exam",
  title: "Level 3 Final Exam",
  slug: "level-3-exam",
  level: 3,
  moduleId: "level-3-exam",
  order: 1,
  duration: "45 min",
  objectives: ["Demonstrate mastery of Level 3", "Pass with 80% to unlock Level 4"],
  prerequisites: [],
  content: examContent(3, 40, 80, "Level 4"),
  hasQuiz: true,
};

export const level4ExamLesson: Lesson = {
  id: "level-4-exam",
  title: "Level 4 Final Exam",
  slug: "level-4-exam",
  level: 4,
  moduleId: "level-4-exam",
  order: 1,
  duration: "45 min",
  objectives: ["Demonstrate mastery of Level 4", "Pass with 80% to unlock Level 5"],
  prerequisites: [],
  content: examContent(4, 40, 80, "Level 5"),
  hasQuiz: true,
};

export const level5ExamLesson: Lesson = {
  id: "level-5-exam",
  title: "Level 5 Final Exam",
  slug: "level-5-exam",
  level: 5,
  moduleId: "level-5-exam",
  order: 1,
  duration: "60 min",
  objectives: ["Demonstrate mastery of Level 5", "Pass with 85% to earn certification"],
  prerequisites: [],
  content: [
    {
      type: "text" as const,
      heading: "About This Exam",
      content:
        "This exam has 50 questions plus a coding assessment covering Level 5 (Python, data, backtesting, strategies, ML, risk metrics, automation). You need 85% to earn the Quantitative Trading Professional certificate.",
    },
    {
      type: "warning" as const,
      heading: "Certification",
      content: "Upon passing, you'll receive a certificate, downloadable PDF, and badge for your profile.",
    },
    {
      type: "key-takeaway" as const,
      heading: "Ready?",
      content: "The quiz below will show all questions. Good luck.",
    },
  ],
  hasQuiz: true,
};
