import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import type { ReactNode } from "react";
import type {
  AccountType,
  Position,
  Trade,
  SimulatorAccount,
  PendingOrder,
  OrderType,
} from "../types/simulator";
import { getDayTradesInWindow } from "../lib/pdt";

const STORAGE_KEY = "trading-edu-simulator";

const INITIAL_BALANCES: Record<AccountType, number> = {
  stocks: 25000,
  forex: 1000,
  crypto: 5000,
  commodities: 10000,
  futures: 10000,
};

function createAccount(type: AccountType): SimulatorAccount {
  return {
    id: crypto.randomUUID(),
    type,
    balance: INITIAL_BALANCES[type],
    equity: INITIAL_BALANCES[type],
    positions: [],
    tradeHistory: [],
    startingBalance: INITIAL_BALANCES[type],
    pendingOrders: [],
  };
}

interface SimulatorContextType {
  accounts: Record<AccountType, SimulatorAccount>;
  activeAccount: AccountType;
  setActiveAccount: (type: AccountType) => void;
  openPosition: (symbol: string, type: "long" | "short", quantity: number, price: number, slippagePct?: number, trailingStopPct?: number, takeProfit?: number, stopLoss?: number) => void;
  closePosition: (positionId: string, price: number, onPdtBlocked?: () => void) => void;
  placeOrder: (symbol: string, side: "long" | "short", quantity: number, orderType: OrderType, price: number, limitPrice?: number, stopPrice?: number, ocoGroupId?: string) => void;
  placeOCOOrder: (symbol: string, side: "long" | "short", quantity: number, order1: { orderType: OrderType; limitPrice?: number; stopPrice?: number }, order2: { orderType: OrderType; limitPrice?: number; stopPrice?: number }) => void;
  cancelPendingOrder: (orderId: string) => void;
  processPriceUpdate: (symbol: string, bid: number, ask: number) => void;
  resetAccount: (type: AccountType) => void;
  setForexLeverage: (leverage: number) => void;
}

const SimulatorContext = createContext<SimulatorContextType | null>(null);

export function SimulatorProvider({ children }: { children: ReactNode }) {
  const [accounts, setAccounts] = useState<Record<AccountType, SimulatorAccount>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.accounts) {
          const accs = parsed.accounts as Record<AccountType, SimulatorAccount>;
          for (const t of ["stocks", "forex", "crypto", "commodities", "futures"] as AccountType[]) {
            if (accs[t]) {
              if (!accs[t].pendingOrders) accs[t].pendingOrders = [];
              if (t === "forex" && accs[t].leverage == null) accs[t].leverage = 1;
            }
          }
          return accs;
        }
      }
    } catch {
      // ignore
    }
    return {
      stocks: createAccount("stocks"),
      forex: createAccount("forex"),
      crypto: createAccount("crypto"),
      commodities: createAccount("commodities"),
      futures: createAccount("futures"),
    };
  });
  const [activeAccount, setActiveAccount] = useState<AccountType>("stocks");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ accounts }));
    } catch {
      // ignore
    }
  }, [accounts]);

  const openPosition = useCallback(
    (symbol: string, side: "long" | "short", quantity: number, price: number, slippagePct = 0.001, trailingStopPct?: number, takeProfit?: number, stopLoss?: number) => {
      const type = activeAccount;
      const slippage = price * slippagePct * (side === "long" ? 1 : -1);
      const execPrice = price + slippage;
      const notional = quantity * Math.abs(execPrice);
      setAccounts((prev) => {
        const acc = prev[type];
        const leverage = type === "forex" ? (acc.leverage ?? 1) : 1;
        const margin = type === "forex" && leverage > 1 ? notional / leverage : notional;
        if (side === "long" && acc.balance < margin) return prev;
        if (side === "short" && acc.balance < margin) return prev;
        const position: Position = {
          id: crypto.randomUUID(),
          symbol,
          type: side,
          quantity,
          entryPrice: execPrice,
          currentPrice: execPrice,
          entryTimestamp: new Date().toISOString(),
          unrealizedPnL: 0,
          unrealizedPnLPercent: 0,
          trailingStopPct,
          bestPriceSinceOpen: execPrice,
          takeProfit: takeProfit && takeProfit > 0 ? takeProfit : undefined,
          stopLoss: stopLoss && stopLoss > 0 ? stopLoss : undefined,
        };
        const newPositions = [...acc.positions, position];
        const newBalance =
          side === "long" ? acc.balance - margin : acc.balance + margin; // short: receive margin
        const equity = newBalance + newPositions.reduce(
          (sum, p) => sum + p.quantity * p.currentPrice * (p.type === "long" ? 1 : -1),
          0
        );
        return {
          ...prev,
          [type]: {
            ...acc,
            balance: newBalance,
            positions: newPositions,
            equity,
          },
        };
      });
    },
    [activeAccount]
  );

  const closePosition = useCallback(
    (positionId: string, price: number, onPdtBlocked?: () => void) => {
      const type = activeAccount;
      setAccounts((prev) => {
        const acc = prev[type];
        const pos = acc.positions.find((p) => p.id === positionId);
        if (!pos) return prev;
        const isDayTrade =
          pos.entryTimestamp &&
          new Date(pos.entryTimestamp).toISOString().slice(0, 10) ===
            new Date().toISOString().slice(0, 10);
        const dayTradesUsed = getDayTradesInWindow(acc.dayTradeDates || []);
        const pdtBlock =
          type === "stocks" &&
          acc.equity < 25000 &&
          isDayTrade &&
          dayTradesUsed >= 3;
        if (pdtBlock) {
          queueMicrotask(() => onPdtBlocked?.());
          return prev;
        }
        const pnl =
          pos.type === "long"
            ? (price - pos.entryPrice) * pos.quantity
            : (pos.entryPrice - price) * pos.quantity;
        const pnlPercent =
          pos.type === "long"
            ? ((price - pos.entryPrice) / pos.entryPrice) * 100
            : ((pos.entryPrice - price) / pos.entryPrice) * 100;
        const proceeds =
          pos.type === "long"
            ? pos.quantity * price
            : -pos.quantity * price;
        const trade: Trade = {
          id: crypto.randomUUID(),
          symbol: pos.symbol,
          type: pos.type,
          quantity: pos.quantity,
          entryPrice: pos.entryPrice,
          exitPrice: price,
          pnl,
          pnlPercent,
          timestamp: new Date().toISOString(),
        };
        const dayTradeDates = acc.dayTradeDates || [];
        const newDayTradeDates = isDayTrade
          ? [...dayTradeDates, new Date().toISOString().slice(0, 10)]
          : dayTradeDates;
        const newPositions = acc.positions.filter((p) => p.id !== positionId);
        const newBalance = acc.balance + proceeds;
        const equity =
          newBalance +
          newPositions.reduce(
            (sum, p) =>
              sum + p.quantity * p.currentPrice * (p.type === "long" ? 1 : -1),
            0
          );
        return {
          ...prev,
          [type]: {
            ...acc,
            balance: newBalance,
            equity,
            positions: newPositions,
            tradeHistory: [trade, ...acc.tradeHistory].slice(0, 100),
            dayTradeDates: newDayTradeDates,
          },
        };
      });
    },
    [activeAccount]
  );

  const placeOrder = useCallback(
    (symbol: string, side: "long" | "short", quantity: number, orderType: OrderType, price: number, limitPrice?: number, stopPrice?: number, ocoGroupId?: string) => {
      const type = activeAccount;
      if (orderType === "market") {
        openPosition(symbol, side, quantity, price);
        return;
      }
      const order: PendingOrder = {
        id: crypto.randomUUID(),
        symbol,
        side,
        orderType,
        quantity,
        limitPrice,
        stopPrice,
        createdAt: new Date().toISOString(),
        ocoGroupId,
      };
      setAccounts((prev) => ({
        ...prev,
        [type]: {
          ...prev[type],
          pendingOrders: [...(prev[type].pendingOrders || []), order],
        },
      }));
    },
    [activeAccount, openPosition]
  );

  const placeOCOOrder = useCallback(
    (symbol: string, side: "long" | "short", quantity: number, order1: { orderType: OrderType; limitPrice?: number; stopPrice?: number }, order2: { orderType: OrderType; limitPrice?: number; stopPrice?: number }) => {
      const type = activeAccount;
      const ocoGroupId = crypto.randomUUID();
      const o1: PendingOrder = {
        id: crypto.randomUUID(),
        symbol,
        side,
        orderType: order1.orderType,
        quantity,
        limitPrice: order1.limitPrice,
        stopPrice: order1.stopPrice,
        createdAt: new Date().toISOString(),
        ocoGroupId,
      };
      const o2: PendingOrder = {
        id: crypto.randomUUID(),
        symbol,
        side,
        orderType: order2.orderType,
        quantity,
        limitPrice: order2.limitPrice,
        stopPrice: order2.stopPrice,
        createdAt: new Date().toISOString(),
        ocoGroupId,
      };
      setAccounts((prev) => ({
        ...prev,
        [type]: {
          ...prev[type],
          pendingOrders: [...(prev[type].pendingOrders || []), o1, o2],
        },
      }));
    },
    [activeAccount]
  );

  const cancelPendingOrder = useCallback((orderId: string) => {
    const type = activeAccount;
    setAccounts((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        pendingOrders: (prev[type].pendingOrders || []).filter((o) => o.id !== orderId),
      },
    }));
  }, [activeAccount]);

  const processPriceUpdate = useCallback(
    (symbol: string, bid: number, ask: number) => {
      const type = activeAccount;
      const mid = (bid + ask) / 2;
      setAccounts((prev) => {
        const acc = prev[type];
        const pending = acc.pendingOrders || [];
        const toFill: { ord: PendingOrder; fillPrice: number }[] = [];
        for (const ord of pending) {
          if (ord.symbol !== symbol) continue;
          let shouldFill = false;
          let fillPrice = mid;
          if (ord.orderType === "limit" && ord.limitPrice != null) {
            if (ord.side === "long" && ask <= ord.limitPrice) {
              shouldFill = true;
              fillPrice = ord.limitPrice;
            } else if (ord.side === "short" && bid >= ord.limitPrice) {
              shouldFill = true;
              fillPrice = ord.limitPrice;
            }
          } else if (ord.orderType === "stop" && ord.stopPrice != null) {
            if (ord.side === "long" && ask >= ord.stopPrice) {
              shouldFill = true;
              fillPrice = ask;
            } else if (ord.side === "short" && bid <= ord.stopPrice) {
              shouldFill = true;
              fillPrice = bid;
            }
          } else if (ord.orderType === "stop_limit" && ord.stopPrice != null && ord.limitPrice != null) {
            if (ord.side === "long" && ask >= ord.stopPrice && ask <= ord.limitPrice) {
              shouldFill = true;
              fillPrice = ord.limitPrice;
            } else if (ord.side === "short" && bid <= ord.stopPrice && bid >= ord.limitPrice) {
              shouldFill = true;
              fillPrice = ord.limitPrice;
            }
          }
          if (shouldFill) toFill.push({ ord, fillPrice });
        }
        const filledOcoGroups = new Set(toFill.map((f) => f.ord.ocoGroupId).filter(Boolean) as string[]);
        const newPending = pending.filter((o) => {
          if (toFill.some((f) => f.ord.id === o.id)) return false;
          if (o.ocoGroupId && filledOcoGroups.has(o.ocoGroupId)) return false;
          return true;
        });
        let nextAcc = { ...acc, pendingOrders: newPending };
        // Check bracket orders (take profit / stop loss) on positions
        for (const pos of nextAcc.positions) {
          if (pos.symbol !== symbol) continue;
          let shouldClose = false;
          if (pos.takeProfit != null) {
            if (pos.type === "long" && mid >= pos.takeProfit) shouldClose = true;
            if (pos.type === "short" && mid <= pos.takeProfit) shouldClose = true;
          }
          if (pos.stopLoss != null) {
            if (pos.type === "long" && mid <= pos.stopLoss) shouldClose = true;
            if (pos.type === "short" && mid >= pos.stopLoss) shouldClose = true;
          }
          if (shouldClose) {
            const pnl = pos.type === "long" ? (mid - pos.entryPrice) * pos.quantity : (pos.entryPrice - mid) * pos.quantity;
            const trade: Trade = {
              id: crypto.randomUUID(),
              symbol: pos.symbol,
              type: pos.type,
              quantity: pos.quantity,
              entryPrice: pos.entryPrice,
              exitPrice: mid,
              pnl,
              pnlPercent: pos.type === "long" ? ((mid - pos.entryPrice) / pos.entryPrice) * 100 : ((pos.entryPrice - mid) / pos.entryPrice) * 100,
              timestamp: new Date().toISOString(),
            };
            const proceeds = pos.type === "long" ? pos.quantity * mid : -pos.quantity * mid;
            const newPositions = nextAcc.positions.filter((p) => p.id !== pos.id);
            nextAcc = {
              ...nextAcc,
              positions: newPositions,
              balance: nextAcc.balance + proceeds,
              tradeHistory: [trade, ...nextAcc.tradeHistory].slice(0, 100),
              equity: nextAcc.balance + proceeds + newPositions.reduce((s, p) => s + p.quantity * (p.symbol === symbol ? mid : p.currentPrice) * (p.type === "long" ? 1 : -1), 0),
            };
            continue;
          }
        }
        // Check trailing stops on positions
        for (const pos of nextAcc.positions) {
          if (pos.symbol !== symbol || pos.trailingStopPct == null) continue;
          const best = pos.bestPriceSinceOpen ?? pos.entryPrice;
          const newBest = pos.type === "long" ? Math.max(best, mid) : Math.min(best, mid);
          let shouldClose = false;
          if (pos.type === "long" && mid <= newBest * (1 - pos.trailingStopPct / 100)) shouldClose = true;
          if (pos.type === "short" && mid >= newBest * (1 + pos.trailingStopPct / 100)) shouldClose = true;
          if (shouldClose) {
            const pnl = pos.type === "long" ? (mid - pos.entryPrice) * pos.quantity : (pos.entryPrice - mid) * pos.quantity;
            const trade: Trade = {
              id: crypto.randomUUID(),
              symbol: pos.symbol,
              type: pos.type,
              quantity: pos.quantity,
              entryPrice: pos.entryPrice,
              exitPrice: mid,
              pnl,
              pnlPercent: pos.type === "long" ? ((mid - pos.entryPrice) / pos.entryPrice) * 100 : ((pos.entryPrice - mid) / pos.entryPrice) * 100,
              timestamp: new Date().toISOString(),
            };
            const proceeds = pos.type === "long" ? pos.quantity * mid : -pos.quantity * mid;
            const newPositions = nextAcc.positions.filter((p) => p.id !== pos.id);
            nextAcc = {
              ...nextAcc,
              positions: newPositions,
              balance: nextAcc.balance + proceeds,
              tradeHistory: [trade, ...nextAcc.tradeHistory].slice(0, 100),
              equity: nextAcc.balance + proceeds + newPositions.reduce((s, p) => s + p.quantity * (p.symbol === symbol ? mid : p.currentPrice) * (p.type === "long" ? 1 : -1), 0),
            };
            continue;
          }
          // Update best price
          nextAcc = {
            ...nextAcc,
            positions: nextAcc.positions.map((p) =>
              p.id === pos.id ? { ...p, bestPriceSinceOpen: newBest, currentPrice: mid } : p
            ),
          };
        }

        for (const { ord, fillPrice } of toFill) {
          const slippage = 0.001;
          const execPrice = ord.side === "long" ? fillPrice * (1 + slippage) : fillPrice * (1 - slippage);
          const notional = ord.quantity * Math.abs(execPrice);
          const lev = type === "forex" ? (nextAcc.leverage ?? 1) : 1;
          const margin = type === "forex" && lev > 1 ? notional / lev : notional;
          if (nextAcc.balance < margin) continue;
          const position: Position = {
            id: crypto.randomUUID(),
            symbol: ord.symbol,
            type: ord.side,
            quantity: ord.quantity,
            entryPrice: execPrice,
            currentPrice: execPrice,
            entryTimestamp: new Date().toISOString(),
            unrealizedPnL: 0,
            unrealizedPnLPercent: 0,
          };
          const newPositions = [...nextAcc.positions, position];
          const newBalance = ord.side === "long" ? nextAcc.balance - margin : nextAcc.balance + margin;
          nextAcc = {
            ...nextAcc,
            balance: newBalance,
            positions: newPositions,
            equity: newBalance + newPositions.reduce((sum, p) => sum + p.quantity * p.currentPrice * (p.type === "long" ? 1 : -1), 0),
          };
        }
        return { ...prev, [type]: nextAcc };
      });
    },
    [activeAccount]
  );

  const setForexLeverage = useCallback((leverage: number) => {
    setAccounts((prev) => ({
      ...prev,
      forex: {
        ...prev.forex,
        leverage: Math.max(1, Math.min(50, leverage)),
      },
    }));
  }, []);

  const resetAccount = useCallback((type: AccountType) => {
    setAccounts((prev) => ({
      ...prev,
      [type]: createAccount(type),
    }));
  }, []);

  return (
    <SimulatorContext.Provider
      value={{
        accounts,
        activeAccount,
        setActiveAccount,
        openPosition,
        closePosition,
        placeOrder,
        placeOCOOrder,
        cancelPendingOrder,
        processPriceUpdate,
        resetAccount,
        setForexLeverage,
      }}
    >
      {children}
    </SimulatorContext.Provider>
  );
}

export function useSimulator() {
  const ctx = useContext(SimulatorContext);
  if (!ctx) throw new Error("useSimulator must be used within SimulatorProvider");
  return ctx;
}
