import { useState } from "react";
import { Calendar, AlertCircle } from "lucide-react";

// Placeholder events - in production, fetch from Forex Factory, Investing.com, or similar API
const SAMPLE_EVENTS = [
  { date: new Date(), time: "8:30 AM ET", country: "US", event: "CPI (Consumer Price Index)", impact: "high" as const },
  { date: new Date(), time: "10:00 AM ET", country: "US", event: "Consumer Confidence", impact: "medium" as const },
  { date: new Date(Date.now() + 86400000), time: "2:00 PM ET", country: "US", event: "FOMC Meeting Minutes", impact: "high" as const },
  { date: new Date(Date.now() + 86400000), time: "8:30 AM ET", country: "US", event: "Retail Sales", impact: "high" as const },
  { date: new Date(Date.now() + 2 * 86400000), time: "8:30 AM ET", country: "US", event: "Initial Jobless Claims", impact: "medium" as const },
];

const impactColors = {
  high: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border-red-200 dark:border-red-800",
  medium: "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 border-amber-200 dark:border-amber-800",
  low: "bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-300 border-surface-200 dark:border-surface-700",
};

export function EconomicCalendar() {
  const [filter, setFilter] = useState<"all" | "high">("all");
  const events = filter === "high"
    ? SAMPLE_EVENTS.filter((e) => e.impact === "high")
    : SAMPLE_EVENTS;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="h-5 w-5 text-primary-500" />
        <h3 className="font-semibold text-surface-900 dark:text-surface-100">Economic Calendar</h3>
      </div>
      <p className="text-sm text-surface-600 dark:text-surface-400">
        Major economic events can move markets. High-impact events often cause increased volatility.
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
            filter === "all" ? "bg-primary-500 text-white" : "bg-surface-200 dark:bg-surface-700"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("high")}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1 ${
            filter === "high" ? "bg-primary-500 text-white" : "bg-surface-200 dark:bg-surface-700"
          }`}
        >
          <AlertCircle className="h-4 w-4" />
          High Impact
        </button>
      </div>
      <div className="space-y-2 max-h-80 overflow-y-auto">
        {events.map((evt, i) => (
          <div
            key={i}
            className={`p-4 rounded-lg border ${impactColors[evt.impact]}`}
          >
            <div className="flex justify-between items-start gap-2">
              <div>
                <p className="font-medium">{evt.event}</p>
                <p className="text-sm opacity-80 mt-0.5">
                  {evt.date.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })} • {evt.time}
                </p>
              </div>
              <span className="text-xs font-medium uppercase">{evt.country}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-surface-500">
        Add VITE_FOREX_FACTORY_KEY or similar for live data. Currently showing sample events.
      </p>
    </div>
  );
}
