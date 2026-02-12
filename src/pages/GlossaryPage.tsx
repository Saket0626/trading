import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import { GLOSSARY } from "../data/glossary";

export function GlossaryPage() {
  const [searchParams] = useSearchParams();
  const qFromUrl = searchParams.get("q") || "";
  const [search, setSearch] = useState(qFromUrl);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    if (qFromUrl) setSearch(qFromUrl);
  }, [qFromUrl]);

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

  return (
    <div className="container mx-auto px-4 py-12">
      <nav className="mb-8 text-sm text-surface-600 dark:text-surface-400">
        <Link to="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-surface-900 dark:text-surface-100">Glossary</span>
      </nav>

      <h1 className="font-display text-3xl font-bold text-surface-900 dark:text-surface-100 mb-2">
        Trading Glossary
      </h1>
      <p className="text-surface-600 dark:text-surface-400 mb-8">
        {GLOSSARY.length}+ trading terms with clear definitions.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-surface-400" />
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
        {terms.map((t) => (
          <div
            key={t.term}
            className="p-4 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-semibold text-surface-900 dark:text-surface-100">
                  {t.term}
                </h2>
                <p className="text-sm text-surface-600 dark:text-surface-400 mt-1">
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
        <p className="text-surface-500 text-center py-12">No terms found.</p>
      )}
    </div>
  );
}
