import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, BookOpen, BookMarked } from "lucide-react";
import { GLOSSARY } from "../data/glossary";
import { allLessons } from "../data/lessons";
import { MODULES } from "../data/curriculum";

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const qFromUrl = searchParams.get("q") || "";
  const [search, setSearch] = useState(qFromUrl);

  useEffect(() => {
    if (qFromUrl) setSearch(qFromUrl);
  }, [qFromUrl]);

  const { lessonResults, glossaryResults } = useMemo(() => {
    const s = search.trim().toLowerCase();
    if (!s) return { lessonResults: [], glossaryResults: [] };

    const lessons = allLessons
      .filter((l) => {
        const titleMatch = l.title.toLowerCase().includes(s);
        const slugMatch = l.slug.toLowerCase().includes(s);
        const contentMatch = l.content?.some(
          (c) => typeof c.content === "string" && c.content.toLowerCase().includes(s)
        );
        const objectivesMatch = l.objectives?.some(
          (o) => o.toLowerCase().includes(s)
        );
        return titleMatch || slugMatch || contentMatch || objectivesMatch;
      })
      .slice(0, 15);

    const terms = GLOSSARY.filter(
      (t) =>
        t.term.toLowerCase().includes(s) ||
        t.definition.toLowerCase().includes(s) ||
        t.category.toLowerCase().includes(s)
    ).slice(0, 15);

    return { lessonResults: lessons, glossaryResults: terms };
  }, [search]);

  const getLessonRoute = (lesson: (typeof allLessons)[0]) => {
    const mod = MODULES.find((m) => m.id === lesson.moduleId);
    if (!mod) return "/learn/1";
    return `/learn/${mod.level}/${mod.slug}/${lesson.slug}`;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <nav className="mb-8 text-sm text-[var(--text-secondary)]">
        <Link to="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--text-primary)]">Search</span>
      </nav>

      <h1 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-2">
        Search
      </h1>
      <p className="text-[var(--text-secondary)] mb-8">
        Search lessons and glossary terms.
      </p>

      <div className="relative max-w-2xl mb-12">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--text-secondary)]" />
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search lessons, terms..."
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900 text-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {!search.trim() ? (
        <p className="text-[var(--text-secondary)]">Enter a search term to find lessons and glossary entries.</p>
      ) : (
        <div className="space-y-12">
          <section>
            <h2 className="font-semibold text-lg text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary-500" />
              Lessons ({lessonResults.length})
            </h2>
            {lessonResults.length === 0 ? (
              <p className="text-[var(--text-secondary)]">No lessons match "{search}".</p>
            ) : (
              <div className="space-y-2">
                {lessonResults.map((lesson) => (
                  <Link
                    key={lesson.id}
                    to={getLessonRoute(lesson)}
                    className="block p-4 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
                  >
                    <p className="font-medium text-[var(--text-primary)]">
                      {lesson.title}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">
                      Level {lesson.level} · {lesson.duration}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </section>

          <section>
            <h2 className="font-semibold text-lg text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <BookMarked className="h-5 w-5 text-primary-500" />
              Glossary ({glossaryResults.length})
            </h2>
            {glossaryResults.length === 0 ? (
              <p className="text-[var(--text-secondary)]">No glossary terms match "{search}".</p>
            ) : (
              <div className="space-y-2">
                {glossaryResults.map((t) => (
                  <div
                    key={t.term}
                    className="p-4 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800"
                  >
                    <p className="font-medium text-[var(--text-primary)]">
                      {t.term}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">
                      {t.definition}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] mt-2">{t.category}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
