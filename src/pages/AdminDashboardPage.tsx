import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  getAnalyticsSummary,
  exportAnalyticsJson,
  exportAnalyticsCsv,
} from "../lib/analytics";
import { BarChart3, Download, FileJson } from "lucide-react";

export function AdminDashboardPage() {
  const [, setRefreshKey] = useState(0);
  const summary = getAnalyticsSummary();

  const handleExportJson = useCallback(() => {
    const blob = new Blob([exportAnalyticsJson()], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `analytics-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  const handleExportCsv = useCallback(() => {
    const blob = new Blob([exportAnalyticsCsv()], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `analytics-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  const dates = Object.keys(summary.visitsByDate).sort();
  const last30Days = dates.slice(-30);
  const maxVisits = Math.max(
    1,
    ...last30Days.map((d) => summary.visitsByDate[d] || 0)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-8 text-sm text-surface-600 dark:text-surface-400">
        <Link to="/" className="hover:text-primary-500">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-surface-900 dark:text-surface-100">
          Analytics
        </span>
      </nav>

      <header className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold text-surface-900 dark:text-surface-100 flex items-center gap-2">
            <BarChart3 className="h-8 w-8 text-amber-500" />
            Analytics Dashboard
          </h1>
          <p className="mt-1 text-surface-600 dark:text-surface-400">
            Visitor and usage metrics (admin only)
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setRefreshKey((k) => k + 1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-surface-200 dark:border-surface-600 bg-white dark:bg-surface-800 text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700"
          >
            Refresh
          </button>
          <button
            onClick={handleExportJson}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-surface-200 dark:border-surface-600 bg-white dark:bg-surface-800 text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700"
          >
            <FileJson className="h-4 w-4" />
            Export JSON
          </button>
          <button
            onClick={handleExportCsv}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-surface-200 dark:border-surface-600 bg-white dark:bg-surface-800 text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </button>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <p className="text-sm font-medium text-surface-500 dark:text-surface-400">
            Total Visitors
          </p>
          <p className="mt-1 text-3xl font-bold text-surface-900 dark:text-surface-100">
            {summary.totalVisitors}
          </p>
        </div>
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <p className="text-sm font-medium text-surface-500 dark:text-surface-400">
            Today
          </p>
          <p className="mt-1 text-3xl font-bold text-surface-900 dark:text-surface-100">
            {summary.visitorsToday}
          </p>
        </div>
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <p className="text-sm font-medium text-surface-500 dark:text-surface-400">
            This Week
          </p>
          <p className="mt-1 text-3xl font-bold text-surface-900 dark:text-surface-100">
            {summary.visitorsThisWeek}
          </p>
        </div>
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <p className="text-sm font-medium text-surface-500 dark:text-surface-400">
            Total Page Views
          </p>
          <p className="mt-1 text-3xl font-bold text-surface-900 dark:text-surface-100">
            {summary.totalPageViews}
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 mb-12">
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <p className="text-sm font-medium text-surface-500 dark:text-surface-400">
            New (Today)
          </p>
          <p className="mt-1 text-2xl font-bold text-surface-900 dark:text-surface-100">
            {summary.newVisitors}
          </p>
        </div>
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <p className="text-sm font-medium text-surface-500 dark:text-surface-400">
            Returning
          </p>
          <p className="mt-1 text-2xl font-bold text-surface-900 dark:text-surface-100">
            {summary.returningVisitors}
          </p>
        </div>
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <p className="text-sm font-medium text-surface-500 dark:text-surface-400">
            Active (7 Days)
          </p>
          <p className="mt-1 text-2xl font-bold text-surface-900 dark:text-surface-100">
            {summary.activeUsersLast7Days}
          </p>
        </div>
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <p className="text-sm font-medium text-surface-500 dark:text-surface-400">
            Avg Session
          </p>
          <p className="mt-1 text-2xl font-bold text-surface-900 dark:text-surface-100">
            {summary.averageSessionDurationSeconds}s
          </p>
        </div>
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <p className="text-sm font-medium text-surface-500 dark:text-surface-400">
            Bounce Rate
          </p>
          <p className="mt-1 text-2xl font-bold text-surface-900 dark:text-surface-100">
            {summary.bounceRate}%
          </p>
        </div>
      </div>
      <section className="mb-12">
        <h2 className="font-display text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
          User Progress by Level
        </h2>
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((lv) => {
              const count = summary.userProgressByLevel[lv] || 0;
              const max = Math.max(1, ...Object.values(summary.userProgressByLevel));
              const pct = (count / max) * 100;
              return (
                <div key={lv}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-surface-700 dark:text-surface-300">
                      Level {lv}
                    </span>
                    <span className="text-surface-500 dark:text-surface-400">
                      {count} lessons
                    </span>
                  </div>
                  <div className="h-3 rounded-full bg-surface-200 dark:bg-surface-700 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-orange-500 transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
          Visits (Last 30 Days)
        </h2>
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <div className="flex items-end gap-0.5 h-32">
            {last30Days.map((d) => {
              const v = summary.visitsByDate[d] || 0;
              const pct = maxVisits > 0 ? (v / maxVisits) * 100 : 0;
              return (
                <div
                  key={d}
                  className="flex-1 min-w-[4px] flex flex-col justify-end h-full"
                  title={`${d}: ${v} visits`}
                >
                  <div
                    className="w-full rounded-t bg-amber-500 transition-all"
                    style={{ height: `${Math.max(2, pct)}%` }}
                  />
                </div>
              );
            })}
          </div>
          <div className="mt-2 flex justify-between text-xs text-surface-500 dark:text-surface-400">
            <span>{last30Days[0]}</span>
            <span>{last30Days[last30Days.length - 1]}</span>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
          Most Visited Pages
        </h2>
        <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800/50">
                <th className="text-left py-3 px-4 font-medium text-surface-700 dark:text-surface-300">
                  Page
                </th>
                <th className="text-right py-3 px-4 font-medium text-surface-700 dark:text-surface-300">
                  Views
                </th>
              </tr>
            </thead>
            <tbody>
              {summary.pageViewsByUrl.slice(0, 15).map((p) => (
                <tr
                  key={p.url}
                  className="border-b border-surface-100 dark:border-surface-800 last:border-0"
                >
                  <td className="py-3 px-4 text-surface-900 dark:text-surface-100 truncate max-w-[200px]">
                    {p.url || "/"}
                  </td>
                  <td className="py-3 px-4 text-right text-surface-600 dark:text-surface-400">
                    {p.count}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
          Top 10 Lessons
        </h2>
        <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800/50">
                <th className="text-left py-3 px-4 font-medium text-surface-700 dark:text-surface-300">
                  Lesson URL
                </th>
                <th className="text-right py-3 px-4 font-medium text-surface-700 dark:text-surface-300">
                  Views
                </th>
              </tr>
            </thead>
            <tbody>
              {summary.topLessons.length === 0 ? (
                <tr>
                  <td colSpan={2} className="py-8 px-4 text-center text-surface-500">
                    No lesson views yet
                  </td>
                </tr>
              ) : (
                summary.topLessons.map((p) => (
                  <tr
                    key={p.url}
                    className="border-b border-surface-100 dark:border-surface-800 last:border-0"
                  >
                    <td className="py-3 px-4 text-surface-900 dark:text-surface-100 truncate max-w-[300px]">
                      {p.url}
                    </td>
                    <td className="py-3 px-4 text-right text-surface-600 dark:text-surface-400">
                      {p.count}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
          Module Completions
        </h2>
        <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800/50">
                <th className="text-left py-3 px-4 font-medium text-surface-700 dark:text-surface-300">
                  Module
                </th>
                <th className="text-right py-3 px-4 font-medium text-surface-700 dark:text-surface-300">
                  Completions
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(summary.moduleCompletions).length === 0 ? (
                <tr>
                  <td colSpan={2} className="py-8 px-4 text-center text-surface-500">
                    No module completions yet
                  </td>
                </tr>
              ) : (
                Object.entries(summary.moduleCompletions)
                  .sort((a, b) => b[1] - a[1])
                  .map(([mod, count]) => (
                    <tr
                      key={mod}
                      className="border-b border-surface-100 dark:border-surface-800 last:border-0"
                    >
                      <td className="py-3 px-4 text-surface-900 dark:text-surface-100">
                        {mod}
                      </td>
                      <td className="py-3 px-4 text-right text-surface-600 dark:text-surface-400">
                        {count}
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
          Quiz Performance
        </h2>
        <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800/50">
                <th className="text-left py-3 px-4 font-medium text-surface-700 dark:text-surface-300">
                  Quiz
                </th>
                <th className="text-right py-3 px-4 font-medium text-surface-700 dark:text-surface-300">
                  Avg Score
                </th>
                <th className="text-right py-3 px-4 font-medium text-surface-700 dark:text-surface-300">
                  Pass Rate
                </th>
                <th className="text-right py-3 px-4 font-medium text-surface-700 dark:text-surface-300">
                  Attempts
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(summary.quizAverages).length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-8 px-4 text-center text-surface-500">
                    No quiz attempts yet
                  </td>
                </tr>
              ) : (
                Object.entries(summary.quizAverages)
                  .sort(
                    (a, b) =>
                      (summary.quizAttemptCounts[b[0]] || 0) -
                      (summary.quizAttemptCounts[a[0]] || 0)
                  )
                  .map(([id, avg]) => (
                    <tr
                      key={id}
                      className="border-b border-surface-100 dark:border-surface-800 last:border-0"
                    >
                      <td className="py-3 px-4 text-surface-900 dark:text-surface-100">
                        {id}
                      </td>
                      <td className="py-3 px-4 text-right text-surface-600 dark:text-surface-400">
                        {avg.toFixed(1)}%
                      </td>
                      <td className="py-3 px-4 text-right text-surface-600 dark:text-surface-400">
                        {(summary.quizPassRates?.[id] ?? 0).toFixed(1)}%
                      </td>
                      <td className="py-3 px-4 text-right text-surface-600 dark:text-surface-400">
                        {summary.quizAttemptCounts[id] || 0}
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
