import { Link } from "react-router-dom";
import { Home, Search } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="font-display text-6xl font-bold text-surface-300 dark:text-surface-600 mb-2">
        404
      </h1>
      <p className="text-xl text-surface-600 dark:text-surface-400 mb-6 text-center">
        Page not found. The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
        >
          <Home className="h-5 w-5" />
          Go Home
        </Link>
        <Link
          to="/glossary"
          className="inline-flex items-center gap-2 px-6 py-3 border border-surface-300 dark:border-surface-600 hover:bg-surface-100 dark:hover:bg-surface-800 font-semibold rounded-lg transition-colors"
        >
          <Search className="h-5 w-5" />
          Search Glossary
        </Link>
      </div>
    </div>
  );
}
