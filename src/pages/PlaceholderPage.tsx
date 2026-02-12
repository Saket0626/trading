import { Link } from "react-router-dom";

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="font-display text-2xl font-bold text-surface-900 dark:text-surface-100 mb-4">
        {title}
      </h1>
      <p className="text-surface-600 dark:text-surface-400 mb-6">Coming soon.</p>
      <Link to="/" className="text-primary-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}
