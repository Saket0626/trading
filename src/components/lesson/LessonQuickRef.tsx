import { Link } from "react-router-dom";
import type { Lesson } from "../../types";

interface LessonQuickRefProps {
  lesson: Lesson;
  levelId: string;
  moduleSlug: string;
  nextLesson?: Lesson | null;
}

export function LessonQuickRef({ lesson, levelId, moduleSlug, nextLesson }: LessonQuickRefProps) {
  return (
    <div className="rounded-lg border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800/50 p-4 space-y-3 mb-6">
      <p className="text-xs font-semibold uppercase text-surface-500 dark:text-surface-400">
        Quick Reference
      </p>
      <ul className="text-sm text-surface-600 dark:text-surface-400 space-y-1.5">
        <li>
          <span className="font-medium text-surface-700 dark:text-surface-300">Reading time:</span>{" "}
          {lesson.duration}
        </li>
        <li>
          <span className="font-medium text-surface-700 dark:text-surface-300">Objectives:</span>{" "}
          {lesson.objectives.length}
        </li>
        {lesson.prerequisites && lesson.prerequisites.length > 0 && (
          <li>
            <span className="font-medium text-surface-700 dark:text-surface-300">
              Prerequisites:
            </span>{" "}
            Complete prior lessons in module
          </li>
        )}
        {nextLesson && (
          <li>
            <Link
              to={`/learn/${levelId}/${moduleSlug}/${nextLesson.slug}`}
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              Next: {nextLesson.title}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
