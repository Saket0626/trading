import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { GLOSSARY } from "../data/glossary";

const TERMS_PER_PAGE = 50;

export function GlossaryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const qFromUrl = searchParams.get("q") || "";
  const pageFromUrl = parseInt(searchParams.get("page") || "1", 10);
  const [search, setSearch] = useState(qFromUrl);
  const [filter, setFilter] = useState<string>("all");
  const [page, setPage] = useState(Math.max(1, pageFromUrl));

  useEffect(() => {
    if (qFromUrl) setSearch(qFromUrl);
  }, [qFromUrl]);

  useEffect(() => {
    setPage(1);
  }, [search, filter]);

  const terms = useMemo(() => {
    let list = GLOSSARY;
    if (search) {
      const s = search.toLowerCase();
      list = list.filter(
        (t) =>
          t.term.toLowerCase().includes(s) || t.definition.toLowerCase().includes(s)
      );
    }
    if (filter !== "all") {
      list = list.filter((t) => t.category === filter);
    }
    return list.sort((a, b) => a.term.localeCompare(b.term));
  }, [search, filter]);

  const categories = useMemo(() => {
    const cats = new Set(GLOSSARY.map((t) => t.category));
    return ["all", ...Array.from(cats).sort()];
  }, []);

  const totalPages = Math.ceil(terms.length / TERMS_PER_PAGE) || 1;
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const paginatedTerms = terms.slice(
    (currentPage - 1) * TERMS_PER_PAGE,
    currentPage * TERMS_PER_PAGE
  );

  const goToPage = (p: number) => {
    const next = Math.max(1, Math.min(p, totalPages));
    setPage(next);
    setSearchParams((prev) => {
      const nextParams = new URLSearchParams(prev);
      if (next === 1) nextParams.delete("page");
      else nextParams.set("page", String(next));
      return nextParams;
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <nav className="mb-8 text-sm text-[var(--text-secondary)]">
        <Link to="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--text-primary)]">Glossary</span>
      </nav>

      <h1 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-2">
        Trading Glossary
      </h1>
      <p className="text-[var(--text-secondary)] mb-8">
        {GLOSSARY.length}+ trading terms with clear definitions.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--text-secondary)]" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search terms..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
          />
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c === "all" ? "All Categories" : c}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 max-w-3xl">
        {paginatedTerms.map((t) => (
          <div
            key={t.term}
            className="p-4 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-semibold text-[var(--text-primary)]">
                  {t.term}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  {t.definition}
                </p>
                <span className="inline-block mt-2 px-2 py-0.5 text-xs rounded bg-surface-200 dark:bg-surface-700">
                  {t.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {terms.length === 0 && (
        <p className="text-[var(--text-secondary)] text-center py-12">No terms found.</p>
      )}

      {terms.length > 0 && totalPages > 1 && (
        <nav className="flex items-center justify-center gap-2 mt-8" aria-label="Glossary pagination">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage <= 1}
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="px-4 py-2 text-sm text-[var(--text-secondary)]">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </nav>
      )}
    </div>
  );
}
