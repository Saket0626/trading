import { useState, useEffect, useCallback } from "react";

const FINNHUB_KEY = import.meta.env.VITE_FINNHUB_API_KEY || "";

export interface MarketNewsItem {
  id: number;
  headline: string;
  source: string;
  url: string;
  datetime: number;
  timeAgo: string;
  sentiment?: "positive" | "negative" | "neutral";
}

const REFRESH_MS = 24 * 60 * 60 * 1000; // 24 hours

function timeAgo(ts: number): string {
  const diff = Math.floor((Date.now() / 1000 - ts) / 60);
  if (diff < 60) return `${diff}m ago`;
  if (diff < 1440) return `${Math.floor(diff / 60)}h ago`;
  return `${Math.floor(diff / 1440)}d ago`;
}

async function fetchFinnhubNews(): Promise<MarketNewsItem[]> {
  if (!FINNHUB_KEY) return [];
  try {
    const res = await fetch(
      `https://finnhub.io/api/v1/news?category=general&token=${FINNHUB_KEY}`
    );
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data.slice(0, 10).map((item: { id: number; headline: string; source: string; url: string; datetime: number }) => ({
      id: item.id,
      headline: item.headline || "",
      source: item.source || "News",
      url: item.url || "#",
      datetime: item.datetime,
      timeAgo: timeAgo(item.datetime),
    }));
  } catch {
    return [];
  }
}

export function useMarketNews() {
  const [items, setItems] = useState<MarketNewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = useCallback(async () => {
    setLoading(true);
    const news = await fetchFinnhubNews();
    setItems(news);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, REFRESH_MS);
    return () => clearInterval(interval);
  }, [fetchNews]);

  return { items, loading };
}
