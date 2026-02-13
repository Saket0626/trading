import { useEffect, useRef } from "react";
import {
  createChart,
  CandlestickSeries,
  LineSeries,
  BarSeries,
  HistogramSeries,
  type IChartApi,
  type ISeriesApi,
} from "lightweight-charts";
import type { OHLCV } from "../../services/marketData";
import { sma, ema, bollingerBands, rsi, macd, vwap, atr, stochastic } from "../../lib/indicators";

type ChartType = "candlestick" | "line" | "bar" | "heikinashi";

export interface ChartIndicatorsConfig {
  sma?: number[];
  ema?: number[];
  bollinger?: { period?: number; std?: number };
  rsi?: number;
  macd?: { fast?: number; slow?: number; signal?: number };
  vwap?: boolean;
  atr?: number;
  stochastic?: { k?: number; d?: number };
}

function computeHeikinAshi(data: OHLCV[]): OHLCV[] {
  const result: OHLCV[] = [];
  let haPrev = { open: 0, close: 0 };
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const haClose = (d.open + d.high + d.low + d.close) / 4;
    const haOpen = i === 0 ? d.open : (haPrev.open + haPrev.close) / 2;
    const haHigh = Math.max(d.high, haOpen, haClose);
    const haLow = Math.min(d.low, haOpen, haClose);
    result.push({
      ...d,
      open: haOpen,
      high: haHigh,
      low: haLow,
      close: haClose,
    });
    haPrev = { open: haOpen, close: haClose };
  }
  return result;
}

interface LiveChartProps {
  data: OHLCV[];
  height?: number;
  theme?: "light" | "dark";
  loading?: boolean;
  chartType?: ChartType;
  showVolume?: boolean;
  indicators?: ChartIndicatorsConfig;
  /** Horizontal price lines (support/resistance) - persisted and shown on chart */
  priceLines?: { price: number; color?: string; label?: string }[];
}

export function LiveChart({
  data,
  height = 350,
  theme = "dark",
  loading,
  chartType = "candlestick",
  showVolume = true,
  indicators,
  priceLines,
}: LiveChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartApi = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick" | "Line" | "Bar"> | null>(null);

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

    const priceData = chartType === "heikinashi" ? computeHeikinAshi(data) : data;
    const formatted = priceData.map((d) => ({
      time: (Math.floor(d.timestamp / 1000) || 0) as import("lightweight-charts").UTCTimestamp,
      open: Number(d.open),
      high: Number(d.high),
      low: Number(d.low),
      close: Number(d.close),
    }));

    let mainSeries: ISeriesApi<"Candlestick" | "Line" | "Bar">;
    if (chartType === "line") {
      mainSeries = chart.addSeries(LineSeries, {
        color: "#0d9488",
        lineWidth: 2,
      });
      mainSeries.setData(formatted.map(({ time, close }) => ({ time, value: close })));
    } else if (chartType === "bar") {
      mainSeries = chart.addSeries(BarSeries, {
        upColor: "#22c55e",
        downColor: "#ef4444",
      });
      mainSeries.setData(formatted);
    } else {
      mainSeries = chart.addSeries(CandlestickSeries, {
        upColor: "#22c55e",
        downColor: "#ef4444",
        borderDownColor: "#ef4444",
        borderUpColor: "#22c55e",
        wickDownColor: "#ef4444",
        wickUpColor: "#22c55e",
      });
      mainSeries.setData(formatted);
    }

    if (showVolume && data.some((d) => (d.volume ?? 0) > 0)) {
      const volSeries = chart.addSeries(HistogramSeries, {
        color: "#64748b",
        priceScaleId: "volume",
      });
      volSeries.priceScale().applyOptions({ scaleMargins: { top: 0.85, bottom: 0 }, visible: false });
      volSeries.setData(
        data.map((d) => ({
          time: (Math.floor(d.timestamp / 1000) || 0) as import("lightweight-charts").UTCTimestamp,
          value: d.volume ?? 0,
        }))
      );
    }

    const closes = priceData.map((d) => Number(d.close));
    const times = formatted.map((f) => f.time);

    if (indicators?.sma?.length) {
      const smaColors = ["#f59e0b", "#eab308"];
      indicators.sma.forEach((period, idx) => {
        const vals = sma(closes, period);
        const series = chart.addSeries(LineSeries, { color: smaColors[idx % smaColors.length] ?? "#f59e0b", lineWidth: 1 });
        series.setData(
          times
            .map((t, i) => (vals[i] != null ? { time: t, value: vals[i]! } : null))
            .filter((x): x is { time: typeof times[0]; value: number } => x != null)
        );
      });
    }
    if (indicators?.ema?.length) {
      const colors = ["#8b5cf6", "#06b6d4"];
      indicators.ema.forEach((period, idx) => {
        const vals = ema(closes, period);
        const series = chart.addSeries(LineSeries, { color: colors[idx % colors.length] ?? "#8b5cf6", lineWidth: 1 });
        series.setData(times.map((t, i) => ({ time: t, value: vals[i] ?? closes[i] })));
      });
    }
    if (indicators?.bollinger) {
      const { period = 20, std = 2 } = indicators.bollinger;
      const { upper, middle, lower } = bollingerBands(closes, period, std);
      const upperSeries = chart.addSeries(LineSeries, { color: "#22c55e", lineWidth: 1 });
      const midSeries = chart.addSeries(LineSeries, { color: "#0d9488", lineWidth: 1 });
      const lowerSeries = chart.addSeries(LineSeries, { color: "#ef4444", lineWidth: 1 });
      upperSeries.setData(times.map((t, i) => ({ time: t, value: upper[i] ?? closes[i] })));
      midSeries.setData(times.map((t, i) => ({ time: t, value: middle[i] ?? closes[i] })));
      lowerSeries.setData(times.map((t, i) => ({ time: t, value: lower[i] ?? closes[i] })));
    }
    if (indicators?.vwap && data.some((d) => (d.volume ?? 0) > 0)) {
      const vwapData = vwap(priceData.map((d) => ({ high: d.high, low: d.low, close: d.close, volume: d.volume ?? 0 })));
      const vwapSeries = chart.addSeries(LineSeries, { color: "#a855f7", lineWidth: 2 });
      vwapSeries.setData(times.map((t, i) => ({ time: t, value: vwapData[i] ?? closes[i] })));
    }
    if (indicators?.rsi) {
      const rsiVals = rsi(closes, indicators.rsi);
      const rsiSeries = chart.addSeries(LineSeries, {
        color: "#06b6d4",
        priceScaleId: "rsi",
      });
      rsiSeries.priceScale().applyOptions({
        scaleMargins: { top: 0.9, bottom: 0.1 },
        borderVisible: false,
      });
      rsiSeries.setData(times.map((t, i) => ({ time: t, value: rsiVals[i] ?? 50 })));
    }
    if (indicators?.atr) {
      const atrVals = atr(priceData.map((d) => ({ high: d.high, low: d.low, close: d.close })), indicators.atr);
      const atrSeries = chart.addSeries(LineSeries, { color: "#ec4899", lineWidth: 1, priceScaleId: "atr" });
      atrSeries.priceScale().applyOptions({ scaleMargins: { top: 0.9, bottom: 0.1 }, borderVisible: false });
      atrSeries.setData(times.map((t, i) => ({ time: t, value: atrVals[i] ?? 0 })));
    }
    if (indicators?.stochastic) {
      const { k: kPeriod = 14, d: dPeriod = 3 } = indicators.stochastic;
      const { k: kVals, d: dVals } = stochastic(
        priceData.map((d) => ({ high: d.high, low: d.low, close: d.close })),
        kPeriod,
        dPeriod
      );
      const kSeries = chart.addSeries(LineSeries, { color: "#06b6d4", lineWidth: 1, priceScaleId: "stoch" });
      kSeries.priceScale().applyOptions({ scaleMargins: { top: 0.9, bottom: 0.1 }, borderVisible: false });
      kSeries.setData(times.map((t, i) => ({ time: t, value: kVals[i] ?? 50 })));
      const dSeries = chart.addSeries(LineSeries, { color: "#f59e0b", lineWidth: 1, priceScaleId: "stoch" });
      dSeries.setData(times.map((t, i) => ({ time: t, value: dVals[i] ?? 50 })));
    }
    if (indicators?.macd) {
      const { fast = 12, slow = 26, signal = 9 } = indicators.macd;
      const { macd: macdVals, signal: sigVals, histogram: histVals } = macd(closes, fast, slow, signal);
      const histSeries = chart.addSeries(HistogramSeries, {
        color: "#64748b",
        priceScaleId: "macd",
      });
      histSeries.priceScale().applyOptions({ scaleMargins: { top: 0.85, bottom: 0 }, borderVisible: false });
      histSeries.setData(
        times.map((t, i) => ({
          time: t,
          value: histVals[i] ?? 0,
          color: (histVals[i] ?? 0) >= 0 ? "#22c55e" : "#ef4444",
        }))
      );
      const macdLineSeries = chart.addSeries(LineSeries, { color: "#0d9488", lineWidth: 1, priceScaleId: "macd" });
      macdLineSeries.setData(times.map((t, i) => ({ time: t, value: macdVals[i] ?? 0 })));
      const sigLineSeries = chart.addSeries(LineSeries, { color: "#f59e0b", lineWidth: 1, priceScaleId: "macd" });
      sigLineSeries.setData(times.map((t, i) => ({ time: t, value: sigVals[i] ?? 0 })));
    }

    if (priceLines?.length && mainSeries) {
      for (const pl of priceLines) {
        mainSeries.createPriceLine({
          price: pl.price,
          color: pl.color ?? "#64748b",
          lineWidth: 1,
          lineStyle: 2,
          axisLabelVisible: true,
          title: pl.label ?? "",
        });
      }
    }

    chart.timeScale().fitContent();
    chartApi.current = chart;
    seriesRef.current = mainSeries;

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
  }, [data, height, theme, chartType, showVolume, indicators, priceLines]);

  return (
    <div className="relative rounded-lg overflow-hidden bg-surface-900 dark:bg-surface-950">
      {loading && (
        <div className="absolute inset-0 z-10 skeleton rounded-lg" style={{ height }} aria-hidden />
      )}
      <div ref={chartRef} style={{ height }} className={loading ? "invisible" : ""} />
    </div>
  );
}
