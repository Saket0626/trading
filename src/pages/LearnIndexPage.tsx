import { Link } from "react-router-dom";
import { LEVELS } from "../data/curriculum";
import { ChevronRight } from "lucide-react";

const levelColors: Record<string, string> = {
  emerald: "from-emerald-500 to-teal-600",
  blue: "from-blue-500 to-cyan-600",
  violet: "from-violet-500 to-purple-600",
  amber: "from-amber-500 to-orange-600",
  rose: "from-rose-500 to-pink-600",
};

export function LearnIndexPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-surface-900 dark:text-surface-100">
          Learning Path
        </h1>
        <p className="mt-2 text-surface-600 dark:text-surface-400 text-lg">
          Choose a level to start or continue your journey.
        </p>
      </header>

      <div className="space-y-6 max-w-3xl">
        {LEVELS.map((level) => (
          <Link
            key={level.id}
            to={`/learn/${level.id}`}
            className="block group"
          >
            <div className="flex items-start gap-4 p-6 rounded-xl border border-surface-200 dark:border-surface-700 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-surface-50 dark:hover:bg-surface-800/50 transition-all">
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${levelColors[level.color] || "from-primary-500 to-primary-600"} flex items-center justify-center text-white font-bold`}
              >
                {level.id}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-display font-semibold text-lg text-surface-900 dark:text-surface-100 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  {level.title}
                </h2>
                <p className="text-sm text-surface-600 dark:text-surface-400 mt-1">
                  {level.description}
                </p>
              </div>
              <ChevronRight className="flex-shrink-0 h-5 w-5 text-surface-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
