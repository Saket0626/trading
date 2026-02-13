const PDT_THRESHOLD = 25000;
const PDT_DAY_TRADE_LIMIT = 3;
const PDT_ROLLING_DAYS = 5;

function getBusinessDaysBack(n: number): string[] {
  const dates: string[] = [];
  const d = new Date();
  while (dates.length < n) {
    const day = d.getDay();
    if (day !== 0 && day !== 6) {
      dates.push(d.toISOString().slice(0, 10));
    }
    d.setDate(d.getDate() - 1);
  }
  return dates;
}

export function getDayTradesInWindow(dayTradeDates: string[]): number {
  const window = new Set(getBusinessDaysBack(PDT_ROLLING_DAYS));
  return dayTradeDates.filter((d) => window.has(d)).length;
}

export function isPdtRestricted(
  balance: number,
  dayTradeDates: string[]
): boolean {
  return balance < PDT_THRESHOLD && getDayTradesInWindow(dayTradeDates) >= PDT_DAY_TRADE_LIMIT;
}

export function getPdtRemaining(
  balance: number,
  dayTradeDates: string[]
): number | null {
  if (balance >= PDT_THRESHOLD) return null; // No PDT if 25k+
  const used = getDayTradesInWindow(dayTradeDates);
  return Math.max(0, PDT_DAY_TRADE_LIMIT - used);
}
