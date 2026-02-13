export type AccountType = "stocks" | "forex" | "crypto" | "commodities" | "futures";

export interface Position {
  id: string;
  symbol: string;
  type: "long" | "short";
  quantity: number;
  entryPrice: number;
  currentPrice: number;
  unrealizedPnL: number;
  unrealizedPnLPercent: number;
  entryTimestamp?: string; // ISO string for PDT
  /** Trailing stop: close when price retraces this % from best price since open */
  trailingStopPct?: number;
  /** Best price (long) or worst (short) since open - for trailing stop */
  bestPriceSinceOpen?: number;
  /** Bracket: take profit price - auto-close when hit */
  takeProfit?: number;
  /** Bracket: stop loss price - auto-close when hit */
  stopLoss?: number;
}

export interface Trade {
  id: string;
  symbol: string;
  type: "long" | "short";
  quantity: number;
  entryPrice: number;
  exitPrice: number;
  pnl: number;
  pnlPercent: number;
  timestamp: string;
}

export type OrderType = "market" | "limit" | "stop" | "stop_limit";

export interface PendingOrder {
  id: string;
  symbol: string;
  side: "long" | "short";
  orderType: OrderType;
  quantity: number;
  limitPrice?: number;
  stopPrice?: number;
  createdAt: string;
  /** OCO: when this order fills, cancel all others with same ocoGroupId */
  ocoGroupId?: string;
}

export interface SimulatorAccount {
  id: string;
  type: AccountType;
  balance: number;
  equity: number;
  positions: Position[];
  tradeHistory: Trade[];
  startingBalance: number;
  dayTradeDates?: string[]; // "YYYY-MM-DD" for PDT (same date = 1 day trade)
  pendingOrders?: PendingOrder[];
  /** Forex only: leverage 1:1 to 1:50. Default 1 (no leverage). */
  leverage?: number;
}

export interface OHLCV {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  timestamp: string;
}
