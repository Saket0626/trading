export type LevelId = 1 | 2 | 3 | 4 | 5;

export interface Lesson {
  id: string;
  title: string;
  slug: string;
  level: LevelId;
  moduleId: string;
  order: number;
  duration: string;
  objectives: string[];
  prerequisites?: string[];
  content: LessonContent[];
  hasQuiz: boolean;
  hasExercise?: boolean;
}

export interface LessonContent {
  type: "text" | "analogy" | "warning" | "interactive" | "example" | "key-takeaway";
  heading?: string;
  content: string;
  component?: string;
  props?: Record<string, unknown>;
}

export interface Module {
  id: string;
  title: string;
  slug: string;
  level: LevelId;
  order: number;
  description: string;
  lessonIds: string[];
  icon: string;
}

export interface Level {
  id: LevelId;
  title: string;
  description: string;
  color: string;
  moduleIds: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface UserProgress {
  completedLessons: string[];
  completedQuizzes: Record<string, number>;
  xp: number;
  badges: string[];
  lastActivity: string;
  lastCompletedDate?: string; // "YYYY-MM-DD" for streak
  streakDays?: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
}
