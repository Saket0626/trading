const ANALYTICS_KEY = "trading-edu-analytics";
const VISITOR_ID_KEY = "trading-edu-visitor-id";
const SESSION_START_KEY = "trading-edu-session-start";
const SESSION_LAST_KEY = "trading-edu-session-last";
const SESSION_PAGES_KEY = "trading-edu-session-pages";
const SESSION_INACTIVE_MS = 30 * 60 * 1000;

function getVisitorId(): string {
  let id = localStorage.getItem(VISITOR_ID_KEY);
  if (!id) {
    id =
      "v_" +
      Date.now().toString(36) +
      "_" +
      Math.random().toString(36).slice(2, 12);
    localStorage.setItem(VISITOR_ID_KEY, id);
  }
  return id;
}

function getDateStr(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export interface AnalyticsData {
  totalVisitors: number;
  visitorIds: string[];
  visitsByDate: Record<string, number>;
  pageViews: Record<string, number[]>;
  firstVisitByVisitor: Record<string, number>;
  lastVisitByVisitor: Record<string, number>;
  userProgressByLevel: Record<number, number>;
  moduleCompletions: Record<string, number>;
  quizScores: Record<string, number[]>;
  quizAttemptCounts: Record<string, number>;
  sessionDurations: number[];
  sessionPageCounts: number[];
}

function loadAnalytics(): AnalyticsData {
  const defaults = {
    totalVisitors: 0,
    visitorIds: [],
    visitsByDate: {},
    pageViews: {},
    firstVisitByVisitor: {},
    lastVisitByVisitor: {},
    userProgressByLevel: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    moduleCompletions: {},
    quizScores: {},
    quizAttemptCounts: {},
    sessionDurations: [],
    sessionPageCounts: [],
  };
  try {
    const stored = localStorage.getItem(ANALYTICS_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as Partial<AnalyticsData>;
      return { ...defaults, ...parsed };
    }
  } catch {
    /* ignore */
  }
  return defaults;
}

function saveAnalytics(data: AnalyticsData): void {
  try {
    localStorage.setItem(ANALYTICS_KEY, JSON.stringify(data));
  } catch {
    /* ignore */
  }
}

function setSessionActivity(): void {
  try {
    const now = Date.now();
    const existing = sessionStorage.getItem(SESSION_START_KEY);
    const last = sessionStorage.getItem(SESSION_LAST_KEY);
    if (!existing || !last || now - parseInt(last, 10) > SESSION_INACTIVE_MS) {
      sessionStorage.setItem(SESSION_START_KEY, String(now));
      sessionStorage.setItem(SESSION_PAGES_KEY, "1");
    } else {
      const pages = parseInt(sessionStorage.getItem(SESSION_PAGES_KEY) || "0", 10) + 1;
      sessionStorage.setItem(SESSION_PAGES_KEY, String(pages));
    }
    sessionStorage.setItem(SESSION_LAST_KEY, String(now));
  } catch {
    /* ignore */
  }
}

export function recordSessionEnd(): void {
  try {
    const start = sessionStorage.getItem(SESSION_START_KEY);
    const pages = parseInt(sessionStorage.getItem(SESSION_PAGES_KEY) || "1", 10);
    if (start) {
      const duration = Math.round((Date.now() - parseInt(start, 10)) / 1000);
      const data = loadAnalytics();
      if (!data.sessionDurations) data.sessionDurations = [];
      if (!data.sessionPageCounts) data.sessionPageCounts = [];
      data.sessionDurations.push(duration);
      data.sessionPageCounts.push(pages);
      saveAnalytics(data);
    }
    sessionStorage.removeItem(SESSION_START_KEY);
    sessionStorage.removeItem(SESSION_LAST_KEY);
    sessionStorage.removeItem(SESSION_PAGES_KEY);
  } catch {
    /* ignore */
  }
}

export function trackPageView(pathname: string): void {
  const data = loadAnalytics();
  const visitorId = getVisitorId();
  const now = Date.now();
  const dateStr = getDateStr(new Date());

  setSessionActivity();

  if (!data.visitorIds.includes(visitorId)) {
    data.visitorIds.push(visitorId);
    data.totalVisitors = data.visitorIds.length;
  }
  data.firstVisitByVisitor[visitorId] =
    data.firstVisitByVisitor[visitorId] || now;
  data.lastVisitByVisitor[visitorId] = now;

  data.visitsByDate[dateStr] = (data.visitsByDate[dateStr] || 0) + 1;

  if (!data.pageViews[pathname]) data.pageViews[pathname] = [];
  data.pageViews[pathname].push(now);

  if (!data.sessionDurations) data.sessionDurations = [];
  if (!data.sessionPageCounts) data.sessionPageCounts = [];

  saveAnalytics(data);
}

export function trackQuizAttempt(quizId: string, score: number): void {
  const data = loadAnalytics();
  if (!data.quizScores[quizId]) data.quizScores[quizId] = [];
  data.quizScores[quizId].push(score);
  data.quizAttemptCounts[quizId] =
    (data.quizAttemptCounts[quizId] || 0) + 1;
  saveAnalytics(data);
}

export function trackProgressUpdate(completedLessons: string[]): void {
  const data = loadAnalytics();
  const lessonToLevel: Record<string, number> = {};
  completedLessons.forEach((lid) => {
    const m = lid.match(/^(money-|what-is|stocks-|forex-|comm-|crypto-|level-1)/);
    if (m) lessonToLevel[lid] = 1;
    else if (lid.match(/^(price-chart|chart-|line-|bar-|candlestick|volume|timeframe|same-asset)/)) lessonToLevel[lid] = 2;
    else if (lid.match(/^(support-|sr-|trends|tl-)/)) lessonToLevel[lid] = 2;
    else if (lid.match(/^level-1-exam/)) lessonToLevel[lid] = 1;
    else if (lid.match(/^level-2-exam/)) lessonToLevel[lid] = 2;
    else if (lid.match(/^level-3-exam/)) lessonToLevel[lid] = 3;
    else if (lid.match(/^level-4-exam/)) lessonToLevel[lid] = 4;
    else if (lid.match(/^level-5-exam/)) lessonToLevel[lid] = 5;
    else if (lid.match(/^(ma-|mom-|vol-)/)) lessonToLevel[lid] = 3;
    else if (lid.match(/^(position-|stop-|risk-|financial-|key-ratios|earnings|psychology|trading-plan|orb-|vwap-|breakout|strategies|broker-|demo-|order-|mechanics|costs-|tax-|profitability)/)) lessonToLevel[lid] = 3;
    else if (lid.match(/^(options-|futures-|leverage-|derivatives|mpt-|diversification|rebalancing|portfolio|fibonacci|elliott|wyckoff|advanced-technical|intermarket|vix-)/)) lessonToLevel[lid] = 4;
    else if (lid.match(/^(python-|data-|backtest-|mean-reversion|momentum|pairs-|quant-|ml-|feature-|overfitting|sharpe-|drawdown|monte-carlo|risk-metrics|automation|paper-|live-|automated)/)) lessonToLevel[lid] = 5;
  });

  for (let lv = 1; lv <= 5; lv++) {
    data.userProgressByLevel[lv] = completedLessons.filter(
      (lid) => (lessonToLevel[lid] ?? 1) === lv
    ).length;
  }

  completedLessons.forEach((lid) => {
    const mod = lid.split("-")[0];
    if (mod) {
      data.moduleCompletions[mod] =
        (data.moduleCompletions[mod] || 0) + 1;
    }
  });

  saveAnalytics(data);
}

export function getAnalyticsSummary(): {
  totalVisitors: number;
  visitorsToday: number;
  visitorsThisWeek: number;
  visitorsThisMonth: number;
  newVisitors: number;
  returningVisitors: number;
  activeUsersLast7Days: number;
  totalPageViews: number;
  pageViewsByUrl: Array<{ url: string; count: number }>;
  topLessons: Array<{ url: string; count: number }>;
  userProgressByLevel: Record<number, number>;
  moduleCompletions: Record<string, number>;
  quizAverages: Record<string, number>;
  quizAttemptCounts: Record<string, number>;
  quizPassRates: Record<string, number>;
  averageSessionDurationSeconds: number;
  bounceRate: number;
  visitsByDate: Record<string, number>;
} {
  const data = loadAnalytics();
  const now = new Date();
  const today = getDateStr(now);
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  let visitorsToday = 0;
  let visitorsThisWeek = 0;
  let visitorsThisMonth = 0;
  let newVisitors = 0;
  let returningVisitors = 0;
  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);
  const firstVisit = data.firstVisitByVisitor && typeof data.firstVisitByVisitor === "object" ? data.firstVisitByVisitor : {};
  const lastVisit = data.lastVisitByVisitor && typeof data.lastVisitByVisitor === "object" ? data.lastVisitByVisitor : {};
  const pageViewsData = data.pageViews && typeof data.pageViews === "object" ? data.pageViews : {};
  const quizScoresData = data.quizScores && typeof data.quizScores === "object" ? data.quizScores : {};
  Object.entries(firstVisit).forEach(([, firstTs]) => {
    if (firstTs >= todayStart.getTime()) {
      newVisitors++;
    } else {
      returningVisitors++;
    }
  });
  Object.entries(lastVisit).forEach(([, ts]) => {
    const d = new Date(ts);
    const ds = getDateStr(d);
    if (ds === today) visitorsToday++;
    if (d >= weekAgo) visitorsThisWeek++;
    if (d >= monthAgo) visitorsThisMonth++;
  });

  let totalPageViews = 0;
  const pageViewsByUrl: Array<{ url: string; count: number }> = [];
  Object.entries(pageViewsData).forEach(([url, timestamps]) => {
    totalPageViews += timestamps.length;
    pageViewsByUrl.push({ url, count: timestamps.length });
  });
  pageViewsByUrl.sort((a, b) => b.count - a.count);

  const lessonPaths = pageViewsByUrl.filter((p) =>
    p.url.match(/\/learn\/\d+\/[\w-]+\/[\w-]+/)
  );
  const topLessons = lessonPaths.slice(0, 10);

  const quizAverages: Record<string, number> = {};
  const quizPassRates: Record<string, number> = {};
  Object.entries(quizScoresData).forEach(([id, scores]) => {
    if (scores.length > 0) {
      quizAverages[id] =
        Math.round(
          (scores.reduce((a, b) => a + b, 0) / scores.length) * 10
        ) / 10;
      const passed = scores.filter((s) => s >= 80).length;
      quizPassRates[id] = Math.round((passed / scores.length) * 1000) / 10;
    }
  });

  const durations = data.sessionDurations || [];
  const pageCounts = data.sessionPageCounts || [];
  const averageSessionDurationSeconds =
    durations.length > 0
      ? Math.round(
          durations.reduce((a, b) => a + b, 0) / durations.length
        )
      : 0;
  const totalSessions = pageCounts.length || 1;
  const bounceSessions = pageCounts.filter((c) => c === 1).length;
  const bounceRate = Math.round((bounceSessions / totalSessions) * 1000) / 10;

  const safeUserProgressByLevel = data.userProgressByLevel && typeof data.userProgressByLevel === "object"
    ? { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, ...data.userProgressByLevel }
    : { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  const safeVisitsByDate = data.visitsByDate && typeof data.visitsByDate === "object" ? data.visitsByDate : {};
  const safeQuizAttemptCounts = data.quizAttemptCounts && typeof data.quizAttemptCounts === "object" ? data.quizAttemptCounts : {};
  const safeModuleCompletions = data.moduleCompletions && typeof data.moduleCompletions === "object" ? data.moduleCompletions : {};

  return {
    totalVisitors: data.totalVisitors ?? 0,
    visitorsToday,
    visitorsThisWeek,
    visitorsThisMonth,
    newVisitors,
    returningVisitors,
    activeUsersLast7Days: visitorsThisWeek,
    totalPageViews,
    pageViewsByUrl,
    topLessons,
    userProgressByLevel: safeUserProgressByLevel,
    moduleCompletions: safeModuleCompletions,
    quizAverages,
    quizAttemptCounts: safeQuizAttemptCounts,
    quizPassRates,
    averageSessionDurationSeconds,
    bounceRate,
    visitsByDate: safeVisitsByDate,
  };
}

export function exportAnalyticsJson(): string {
  return JSON.stringify(loadAnalytics(), null, 2);
}

export function exportAnalyticsCsv(): string {
  const summary = getAnalyticsSummary();
  const rows: string[] = [
    "Metric,Value",
    `Total Visitors,${summary.totalVisitors}`,
    `Visitors Today,${summary.visitorsToday}`,
    `Visitors This Week,${summary.visitorsThisWeek}`,
    `Visitors This Month,${summary.visitorsThisMonth}`,
    `New Visitors,${summary.newVisitors}`,
    `Returning Visitors,${summary.returningVisitors}`,
    `Active Users (7 Days),${summary.activeUsersLast7Days}`,
    `Total Page Views,${summary.totalPageViews}`,
    `Avg Session (seconds),${summary.averageSessionDurationSeconds}`,
    `Bounce Rate %,${summary.bounceRate}`,
    "",
    "Page,Views",
    ...summary.pageViewsByUrl.map((p) => `"${p.url}",${p.count}`),
    "",
    "Quiz ID,Average Score,Pass Rate %,Attempts",
    ...Object.keys(summary.quizAverages).map(
      (id) =>
        `"${id}",${summary.quizAverages[id]},${summary.quizPassRates?.[id] ?? 0},${summary.quizAttemptCounts[id] || 0}`
    ),
  ];
  return rows.join("\n");
}
