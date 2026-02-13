/**
 * Technical indicator calculations for chart overlays.
 * Used by LiveChart and Indicator Playground.
 */

export function sma(values: number[], period: number): (number | null)[] {
  const result: (number | null)[] = [];
  for (let i = 0; i < values.length; i++) {
    if (i < period - 1) {
      result.push(null);
    } else {
      let sum = 0;
      for (let j = 0; j < period; j++) sum += values[i - j];
      result.push(sum / period);
    }
  }
  return result;
}

export function ema(values: number[], period: number): (number | null)[] {
  const result: (number | null)[] = [];
  const k = 2 / (period + 1);
  for (let i = 0; i < values.length; i++) {
    if (i < period - 1) {
      result.push(null);
    } else if (i === period - 1) {
      let sum = 0;
      for (let j = 0; j < period; j++) sum += values[j];
      result.push(sum / period);
    } else {
      const prev = result[i - 1]!;
      result.push((values[i] - prev) * k + prev);
    }
  }
  return result;
}

export function rsi(values: number[], period: number = 14): (number | null)[] {
  const result: (number | null)[] = [];
  for (let i = 0; i < values.length; i++) {
    if (i < period) {
      result.push(null);
    } else {
      let gains = 0;
      let losses = 0;
      for (let j = 1; j <= period; j++) {
        const change = values[i - j + 1]! - values[i - j]!;
        if (change > 0) gains += change;
        else losses -= change;
      }
      const avgGain = gains / period;
      const avgLoss = losses / period;
      if (avgLoss === 0) result.push(100);
      else {
        const rs = avgGain / avgLoss;
        result.push(100 - 100 / (1 + rs));
      }
    }
  }
  return result;
}

export function bollingerBands(
  values: number[],
  period: number = 20,
  stdDev: number = 2
): { upper: (number | null)[]; middle: (number | null)[]; lower: (number | null)[] } {
  const middle = sma(values, period);
  const upper: (number | null)[] = [];
  const lower: (number | null)[] = [];
  for (let i = 0; i < values.length; i++) {
    if (i < period - 1 || middle[i] === null) {
      upper.push(null);
      lower.push(null);
    } else {
      let sumSq = 0;
      for (let j = 0; j < period; j++) {
        const diff = values[i - j]! - middle[i]!;
        sumSq += diff * diff;
      }
      const sd = Math.sqrt(sumSq / period);
      upper.push(middle[i]! + stdDev * sd);
      lower.push(middle[i]! - stdDev * sd);
    }
  }
  return { upper, middle, lower };
}

/** VWAP: Volume-Weighted Average Price = sum(typicalPrice * volume) / sum(volume). Resets per session. */
export function vwap(data: { high: number; low: number; close: number; volume: number }[]): (number | null)[] {
  const result: (number | null)[] = [];
  let cumTpV = 0;
  let cumV = 0;
  for (let i = 0; i < data.length; i++) {
    const v = data[i].volume ?? 0;
    const tp = (data[i].high + data[i].low + data[i].close) / 3;
    cumTpV += tp * v;
    cumV += v;
    result.push(cumV > 0 ? cumTpV / cumV : null);
  }
  return result;
}

/** ATR: Average True Range. period typically 14. */
export function atr(data: { high: number; low: number; close: number }[], period: number = 14): (number | null)[] {
  const result: (number | null)[] = [];
  for (let i = 0; i < data.length; i++) {
    if (i < period) {
      result.push(null);
    } else {
      let sum = 0;
      for (let j = i - period + 1; j <= i; j++) {
        const prevClose = j > 0 ? data[j - 1].close : data[j].close;
        const tr = Math.max(
          data[j].high - data[j].low,
          Math.abs(data[j].high - prevClose),
          Math.abs(data[j].low - prevClose)
        );
        sum += tr;
      }
      result.push(sum / period);
    }
  }
  return result;
}

/** Stochastic %K and %D. Typical 14,3,3. */
export function stochastic(
  data: { high: number; low: number; close: number }[],
  kPeriod: number = 14,
  dPeriod: number = 3
): { k: (number | null)[]; d: (number | null)[] } {
  const k: (number | null)[] = [];
  for (let i = 0; i < data.length; i++) {
    if (i < kPeriod - 1) {
      k.push(null);
    } else {
      const slice = data.slice(i - kPeriod + 1, i + 1);
      const highest = Math.max(...slice.map((d) => d.high));
      const lowest = Math.min(...slice.map((d) => d.low));
      const close = data[i].close;
      const val = highest === lowest ? 50 : 100 * ((close - lowest) / (highest - lowest));
      k.push(val);
    }
  }
  const kNum = k.map((v) => v ?? 50);
  const d = sma(kNum, dPeriod);
  return { k, d };
}

/** MACD: fast EMA - slow EMA; signal = EMA of macd; histogram = macd - signal */
export function macd(
  values: number[],
  fastPeriod: number = 12,
  slowPeriod: number = 26,
  signalPeriod: number = 9
): { macd: (number | null)[]; signal: (number | null)[]; histogram: (number | null)[] } {
  const fast = ema(values, fastPeriod);
  const slow = ema(values, slowPeriod);
  const macdLine: (number | null)[] = values.map((_, i) => {
    if (fast[i] === null || slow[i] === null) return null;
    return fast[i]! - slow[i]!;
  });
  const macdValues = macdLine.map((v) => v ?? 0);
  const signalLine = ema(macdValues, signalPeriod);
  const histogram: (number | null)[] = macdLine.map((v, i) => {
    if (v === null || signalLine[i] === null) return null;
    return v - signalLine[i]!;
  });
  return { macd: macdLine, signal: signalLine, histogram };
}
