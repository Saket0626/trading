import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  title: string;
}

interface LessonTOCProps {
  items: TocItem[];
}

export function LessonTOC({ items }: LessonTOCProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (items.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActiveId(e.target.id);
            break;
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="space-y-2" aria-label="Table of contents">
      <p className="text-xs font-semibold uppercase text-surface-500 dark:text-surface-400 mb-3">
        On this page
      </p>
      {items.map(({ id, title }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`block text-sm py-1.5 px-2 rounded-lg transition-colors ${
            activeId === id
              ? "bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 font-medium"
              : "text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-800"
          }`}
        >
          {title}
        </a>
      ))}
    </nav>
  );
}
