import { useEffect, useRef } from "react";
import {
  createChart,
  CandlestickSeries,
  type IChartApi,
  type ISeriesApi,
} from "lightweight-charts";
import type { OHLCV } from "../../services/marketData";

interface LiveChartProps {
  data: OHLCV[];
  height?: number;
  theme?: "light" | "dark";
  loading?: boolean;
}

export function LiveChart({ data, height = 350, theme = "dark", loading }: LiveChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartApi = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);

  useEffect(() => {
    if (!chartRef.current || !data.length) return;

    const chart = createChart(chartRef.current, {
      layout: {
        background: { color: theme === "dark" ? "#0f172a" : "#ffffff" },
        textColor: theme === "dark" ? "#e2e8f0" : "#1e293b",
      },
      grid: {
        vertLines: { color: theme === "dark" ? "#1e293b" : "#e2e8f0" },
        horzLines: { color: theme === "dark" ? "#1e293b" : "#e2e8f0" },
      },
      width: chartRef.current.clientWidth,
      height,
      rightPriceScale: { borderVisible: false },
      timeScale: { borderVisible: false, timeVisible: true, secondsVisible: false },
      crosshair: { vertLine: { labelVisible: true }, horzLine: { labelVisible: true } },
    });

    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#22c55e",
      downColor: "#ef4444",
      borderDownColor: "#ef4444",
      borderUpColor: "#22c55e",
      wickDownColor: "#ef4444",
      wickUpColor: "#22c55e",
    });

    const formatted = data.map((d) => ({
      time: (Math.floor(d.timestamp / 1000) || 0) as import("lightweight-charts").UTCTimestamp,
      open: Number(d.open),
      high: Number(d.high),
      low: Number(d.low),
      close: Number(d.close),
    }));

    candlestickSeries.setData(formatted);
    chart.timeScale().fitContent();

    chartApi.current = chart;
    seriesRef.current = candlestickSeries;

    const handleResize = () => {
      if (chartRef.current && chartApi.current) {
        chartApi.current.applyOptions({ width: chartRef.current.clientWidth });
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
      chartApi.current = null;
      seriesRef.current = null;
    };
  }, [data, height, theme]);

  return (
    <div className="relative rounded-lg overflow-hidden bg-surface-900 dark:bg-surface-950">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface-900/80 z-10">
          <div className="animate-spin h-8 w-8 border-2 border-primary-500 border-t-transparent rounded-full" />
        </div>
      )}
      <div ref={chartRef} style={{ height }} />
    </div>
  );
}
