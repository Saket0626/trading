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
} from "../types/simulator";

const STORAGE_KEY = "trading-edu-simulator";

const INITIAL_BALANCES: Record<AccountType, number> = {
  stocks: 25000,
  forex: 1000,
  crypto: 5000,
  commodities: 10000,
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
  };
}

interface SimulatorContextType {
  accounts: Record<AccountType, SimulatorAccount>;
  activeAccount: AccountType;
  setActiveAccount: (type: AccountType) => void;
  openPosition: (symbol: string, type: "long" | "short", quantity: number, price: number) => void;
  closePosition: (positionId: string, price: number) => void;
  resetAccount: (type: AccountType) => void;
}

const SimulatorContext = createContext<SimulatorContextType | null>(null);

export function SimulatorProvider({ children }: { children: ReactNode }) {
  const [accounts, setAccounts] = useState<Record<AccountType, SimulatorAccount>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.accounts) return parsed.accounts;
      }
    } catch {
      // ignore
    }
    return {
      stocks: createAccount("stocks"),
      forex: createAccount("forex"),
      crypto: createAccount("crypto"),
      commodities: createAccount("commodities"),
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
    (symbol: string, side: "long" | "short", quantity: number, price: number) => {
      const type = activeAccount;
      const cost = quantity * price;
      setAccounts((prev) => {
        const acc = prev[type];
        if (side === "long" && acc.balance < cost) return prev;
        if (side === "short" && acc.balance < cost * 0.1) return prev; // margin
        const position: Position = {
          id: crypto.randomUUID(),
          symbol,
          type: side,
          quantity,
          entryPrice: price,
          currentPrice: price,
          unrealizedPnL: 0,
          unrealizedPnLPercent: 0,
        };
        const newPositions = [...acc.positions, position];
        const newBalance =
          side === "long" ? acc.balance - cost : acc.balance + cost; // short: receive proceeds
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
    (positionId: string, price: number) => {
      const type = activeAccount;
      setAccounts((prev) => {
        const acc = prev[type];
        const pos = acc.positions.find((p) => p.id === positionId);
        if (!pos) return prev;
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
          },
        };
      });
    },
    [activeAccount]
  );

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
        resetAccount,
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
