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
    <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-4 space-y-3 mb-6">
      <p className="text-xs font-semibold uppercase text-[var(--text-secondary)]">
        Quick Reference
      </p>
      <ul className="text-sm text-[var(--text-secondary)] space-y-1.5">
        <li>
          <span className="font-medium text-[var(--text-primary)]">Reading time:</span>{" "}
          {lesson.duration}
        </li>
        <li>
          <span className="font-medium text-[var(--text-primary)]">Objectives:</span>{" "}
          {lesson.objectives.length}
        </li>
        {lesson.prerequisites && lesson.prerequisites.length > 0 && (
          <li>
            <span className="font-medium text-[var(--text-primary)]">
              Prerequisites:
            </span>{" "}
            Complete prior lessons in module
          </li>
        )}
        {nextLesson && (
          <li>
            <Link
              to={`/learn/${levelId}/${moduleSlug}/${nextLesson.slug}`}
              className="text-[var(--accent-primary)] hover:underline font-medium"
            >
              Next: {nextLesson.title}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
