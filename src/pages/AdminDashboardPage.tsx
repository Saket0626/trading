import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getAnalyticsSummary,
  exportAnalyticsJson,
  exportAnalyticsCsv,
} from "../lib/analytics";
import { BarChart3, Download, FileJson, CheckCircle, XCircle, Clock } from "lucide-react";

function formatDateTimeWithSeconds(isoStr: string): string {
  const d = new Date(isoStr);
  return d.toLocaleString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

/** Format build time in Texas (Central) time, moved up 2 hours */
function formatBuildTimeTexas(isoStr: string): string {
  const d = new Date(isoStr);
  d.setHours(d.getHours() + 2);
  return d.toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "America/Chicago",
  });
}

type HealthStatus = "checking" | "ok" | "fail";

export function AdminDashboardPage() {
  const [, setRefreshKey] = useState(0);
  const summary = getAnalyticsSummary();
  const [loadedAt, setLoadedAt] = useState<string>("");
  const [sitemapStatus, setSitemapStatus] = useState<HealthStatus>("checking");
  const [robotsStatus, setRobotsStatus] = useState<HealthStatus>("checking");
  const [homeStatus, setHomeStatus] = useState<HealthStatus>("checking");

  const runHealthChecks = useCallback(() => {
    setLoadedAt(new Date().toISOString());
    setSitemapStatus("checking");
    setRobotsStatus("checking");
    setHomeStatus("checking");
    const base = window.location.origin;
    Promise.all([
      fetch(`${base}/sitemap.xml`, { method: "HEAD" })
        .then((r) => setSitemapStatus(r.ok ? "ok" : "fail"))
        .catch(() => setSitemapStatus("fail")),
      fetch(`${base}/robots.txt`, { method: "HEAD" })
        .then((r) => setRobotsStatus(r.ok ? "ok" : "fail"))
        .catch(() => setRobotsStatus("fail")),
      fetch(base, { method: "HEAD" })
        .then((r) => setHomeStatus(r.ok ? "ok" : "fail"))
        .catch(() => setHomeStatus("fail")),
    ]);
  }, []);

  useEffect(() => {
    runHealthChecks();
  }, [runHealthChecks]);

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

  const last30Days: string[] = [];
  const now = new Date();
  for (let i = 29; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    last30Days.push(d.toISOString().slice(0, 10));
  }
  const maxVisits = Math.max(
    1,
    ...last30Days.map((d) => summary.visitsByDate[d] || 0)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-8 text-sm text-[var(--text-secondary)]">
        <Link to="/" className="hover:text-primary-500">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--text-primary)]">
          Analytics
        </span>
      </nav>

      <header className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold text-[var(--text-primary)] flex items-center gap-2">
            <BarChart3 className="h-8 w-8 text-amber-500" />
            Analytics Dashboard
          </h1>
          <p className="mt-1 text-[var(--text-secondary)]">
            Visitor and usage metrics (admin only)
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => {
              setRefreshKey((k) => k + 1);
              runHealthChecks();
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-surface-200 dark:border-surface-600 bg-white dark:bg-surface-800 text-[var(--text-primary)] hover:bg-surface-50 dark:hover:bg-surface-700"
          >
            Refresh
          </button>
          <button
            onClick={handleExportJson}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-surface-200 dark:border-surface-600 bg-white dark:bg-surface-800 text-[var(--text-primary)] hover:bg-surface-50 dark:hover:bg-surface-700"
          >
            <FileJson className="h-4 w-4" />
            Export JSON
          </button>
          <button
            onClick={handleExportCsv}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-surface-200 dark:border-surface-600 bg-white dark:bg-surface-800 text-[var(--text-primary)] hover:bg-surface-50 dark:hover:bg-surface-700"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </button>
        </div>
      </header>

      <section className="mb-8 p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800/50">
        <h2 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
          <Clock className="h-5 w-5 text-amber-500" />
          Last Updated &amp; Deployment Status
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider mb-1">Build / Deploy time</p>
            <p className="text-sm font-mono text-[var(--text-primary)]">
              {typeof __BUILD_TIME__ !== "undefined"
                ? formatBuildTimeTexas(__BUILD_TIME__)
                : "—"}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider mb-1">Dashboard loaded at</p>
            <p className="text-sm font-mono text-[var(--text-primary)]">
              {loadedAt ? formatDateTimeWithSeconds(loadedAt) : "—"}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider mb-1">Sitemap</p>
            <div className="flex items-center gap-2">
              {sitemapStatus === "checking" && (
                <span className="text-sm text-[var(--text-muted)]">Checking…</span>
              )}
              {sitemapStatus === "ok" && (
                <>
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">OK</span>
                </>
              )}
              {sitemapStatus === "fail" && (
                <>
                  <XCircle className="h-5 w-5 text-red-500" />
                  <span className="text-sm font-medium text-red-600 dark:text-red-400">Failed</span>
                </>
              )}
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider mb-1">Robots &amp; Home</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                {robotsStatus === "checking" && <span className="text-xs text-[var(--text-muted)]">…</span>}
                {robotsStatus === "ok" && <CheckCircle className="h-4 w-4 text-emerald-500" />}
                {robotsStatus === "fail" && <XCircle className="h-4 w-4 text-red-500" />}
                <span className="text-xs text-[var(--text-secondary)]">robots.txt</span>
              </div>
              <div className="flex items-center gap-1.5">
                {homeStatus === "checking" && <span className="text-xs text-[var(--text-muted)]">…</span>}
                {homeStatus === "ok" && <CheckCircle className="h-4 w-4 text-emerald-500" />}
                {homeStatus === "fail" && <XCircle className="h-4 w-4 text-red-500" />}
                <span className="text-xs text-[var(--text-secondary)]">home</span>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-3 text-xs text-[var(--text-muted)]">
          Build time shows when this deployment was built. Health checks verify sitemap.xml, robots.txt, and the homepage return 200.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <p className="text-sm font-medium text-[var(--text-secondary)]">
            Total Visitors
          </p>
          <p className="mt-1 text-3xl font-bold text-[var(--text-primary)]">
            {summary.totalVisitors}
          </p>
        </div>
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <p className="text-sm font-medium text-[var(--text-secondary)]">
            Today
          </p>
          <p className="mt-1 text-3xl font-bold text-[var(--text-primary)]">
            {summary.visitorsToday}
          </p>
        </div>
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <p className="text-sm font-medium text-[var(--text-secondary)]">
            This Week
          </p>
          <p className="mt-1 text-3xl font-bold text-[var(--text-primary)]">
            {summary.visitorsThisWeek}
          </p>
        </div>
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <p className="text-sm font-medium text-[var(--text-secondary)]">
            Total Page Views
          </p>
          <p className="mt-1 text-3xl font-bold text-[var(--text-primary)]">
            {summary.totalPageViews}
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 mb-12">
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <p className="text-sm font-medium text-[var(--text-secondary)]">
            New (Today)
          </p>
          <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">
            {summary.newVisitors}
          </p>
        </div>
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <p className="text-sm font-medium text-[var(--text-secondary)]">
            Returning
          </p>
          <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">
            {summary.returningVisitors}
          </p>
        </div>
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <p className="text-sm font-medium text-[var(--text-secondary)]">
            Active (7 Days)
          </p>
          <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">
            {summary.activeUsersLast7Days}
          </p>
        </div>
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <p className="text-sm font-medium text-[var(--text-secondary)]">
            Avg Session
          </p>
          <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">
            {summary.averageSessionDurationSeconds}s
          </p>
        </div>
        <div className="p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800">
          <p className="text-sm font-medium text-[var(--text-secondary)]">
            Bounce Rate
          </p>
          <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">
            {summary.bounceRate}%
          </p>
        </div>
      </div>
      <section className="mb-12">
        <h2 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-4">
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
                    <span className="font-medium text-[var(--text-primary)]">
                      Level {lv}
                    </span>
                    <span className="text-[var(--text-secondary)]">
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
        <h2 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-4">
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
          <div className="mt-2 flex justify-between text-xs text-[var(--text-secondary)]">
            <span>{last30Days[0] ?? "—"}</span>
            <span>{last30Days.length > 0 ? last30Days[last30Days.length - 1] : "—"}</span>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-4">
          Most Visited Pages
        </h2>
        <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800/50">
                <th className="text-left py-3 px-4 font-medium text-[var(--text-primary)]">
                  Page
                </th>
                <th className="text-right py-3 px-4 font-medium text-[var(--text-primary)]">
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
                  <td className="py-3 px-4 text-[var(--text-primary)] truncate max-w-[200px]">
                    {p.url || "/"}
                  </td>
                  <td className="py-3 px-4 text-right text-[var(--text-secondary)]">
                    {p.count}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-4">
          Top 10 Lessons
        </h2>
        <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800/50">
                <th className="text-left py-3 px-4 font-medium text-[var(--text-primary)]">
                  Lesson URL
                </th>
                <th className="text-right py-3 px-4 font-medium text-[var(--text-primary)]">
                  Views
                </th>
              </tr>
            </thead>
            <tbody>
              {summary.topLessons.length === 0 ? (
                <tr>
                  <td colSpan={2} className="py-8 px-4 text-center text-[var(--text-secondary)]">
                    No lesson views yet
                  </td>
                </tr>
              ) : (
                summary.topLessons.map((p) => (
                  <tr
                    key={p.url}
                    className="border-b border-surface-100 dark:border-surface-800 last:border-0"
                  >
                    <td className="py-3 px-4 text-[var(--text-primary)] truncate max-w-[300px]">
                      {p.url}
                    </td>
                    <td className="py-3 px-4 text-right text-[var(--text-secondary)]">
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
        <h2 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-4">
          Module Completions
        </h2>
        <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800/50">
                <th className="text-left py-3 px-4 font-medium text-[var(--text-primary)]">
                  Module
                </th>
                <th className="text-right py-3 px-4 font-medium text-[var(--text-primary)]">
                  Completions
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(summary.moduleCompletions).length === 0 ? (
                <tr>
                  <td colSpan={2} className="py-8 px-4 text-center text-[var(--text-secondary)]">
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
                      <td className="py-3 px-4 text-[var(--text-primary)]">
                        {mod}
                      </td>
                      <td className="py-3 px-4 text-right text-[var(--text-secondary)]">
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
        <h2 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-4">
          Quiz Performance
        </h2>
        <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800/50">
                <th className="text-left py-3 px-4 font-medium text-[var(--text-primary)]">
                  Quiz
                </th>
                <th className="text-right py-3 px-4 font-medium text-[var(--text-primary)]">
                  Avg Score
                </th>
                <th className="text-right py-3 px-4 font-medium text-[var(--text-primary)]">
                  Pass Rate
                </th>
                <th className="text-right py-3 px-4 font-medium text-[var(--text-primary)]">
                  Attempts
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(summary.quizAverages).length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-8 px-4 text-center text-[var(--text-secondary)]">
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
                      <td className="py-3 px-4 text-[var(--text-primary)]">
                        {id}
                      </td>
                      <td className="py-3 px-4 text-right text-[var(--text-secondary)]">
                        {avg.toFixed(1)}%
                      </td>
                      <td className="py-3 px-4 text-right text-[var(--text-secondary)]">
                        {(summary.quizPassRates?.[id] ?? 0).toFixed(1)}%
                      </td>
                      <td className="py-3 px-4 text-right text-[var(--text-secondary)]">
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
