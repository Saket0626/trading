import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import {
  DEFAULT_TICKER,
  type TickerOption,
  TICKER_STORAGE_KEY,
  MIN_TICKER_ITEMS,
  MAX_TICKER_ITEMS,
} from "../data/tickerOptions";

interface TickerContextType {
  tickerItems: TickerOption[];
  setTickerItems: (items: TickerOption[]) => void;
  resetToDefault: () => void;
  minItems: number;
  maxItems: number;
  isCustomizerOpen: boolean;
  openCustomizer: () => void;
  closeCustomizer: () => void;
}

const TickerContext = createContext<TickerContextType | null>(null);

function loadStored(): TickerOption[] {
  try {
    const raw = localStorage.getItem(TICKER_STORAGE_KEY);
    if (!raw) return DEFAULT_TICKER;
    const parsed = JSON.parse(raw) as TickerOption[];
    if (!Array.isArray(parsed)) return DEFAULT_TICKER;
    if (parsed.length < MIN_TICKER_ITEMS || parsed.length > MAX_TICKER_ITEMS) {
      return DEFAULT_TICKER;
    }
    return parsed;
  } catch {
    return DEFAULT_TICKER;
  }
}

export function TickerProvider({ children }: { children: ReactNode }) {
  const [tickerItems, setTickerItemsState] = useState<TickerOption[]>(loadStored);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(TICKER_STORAGE_KEY, JSON.stringify(tickerItems));
    } catch {
      // ignore
    }
  }, [tickerItems]);

  const setTickerItems = useCallback((items: TickerOption[]) => {
    if (items.length >= MIN_TICKER_ITEMS && items.length <= MAX_TICKER_ITEMS) {
      setTickerItemsState(items);
    }
  }, []);

  const resetToDefault = useCallback(() => {
    setTickerItemsState(DEFAULT_TICKER);
  }, []);

  const openCustomizer = useCallback(() => setIsCustomizerOpen(true), []);
  const closeCustomizer = useCallback(() => setIsCustomizerOpen(false), []);

  return (
    <TickerContext.Provider
      value={{
        tickerItems,
        setTickerItems,
        resetToDefault,
        minItems: MIN_TICKER_ITEMS,
        maxItems: MAX_TICKER_ITEMS,
        isCustomizerOpen,
        openCustomizer,
        closeCustomizer,
      }}
    >
      {children}
    </TickerContext.Provider>
  );
}

export function useTicker() {
  const ctx = useContext(TickerContext);
  if (!ctx) throw new Error("useTicker must be used within TickerProvider");
  return ctx;
}
