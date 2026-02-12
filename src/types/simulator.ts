export type AccountType = "stocks" | "forex" | "crypto" | "commodities";

export interface Position {
  id: string;
  symbol: string;
  type: "long" | "short";
  quantity: number;
  entryPrice: number;
  currentPrice: number;
  unrealizedPnL: number;
  unrealizedPnLPercent: number;
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

export interface SimulatorAccount {
  id: string;
  type: AccountType;
  balance: number;
  equity: number;
  positions: Position[];
  tradeHistory: Trade[];
  startingBalance: number;
}

export interface OHLCV {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  timestamp: string;
}
