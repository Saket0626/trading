import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import type { ReactNode } from "react";

const ADMIN_STORAGE_KEY = "trading-edu-admin";
const ADMIN_EXPIRY_HOURS = 24;
const MAX_ATTEMPTS_PER_HOUR = 5;
const ATTEMPTS_STORAGE_KEY = "trading-edu-admin-attempts";

// SHA-256 hash of "Pr0d!gymath" - verified at runtime
const EXPECTED_HASH =
  "2842939552dd8dd1231289928bdc9b85bfcf0547bf1b465e1f2ea518f47af488";

async function hashInput(input: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

interface AttemptRecord {
  timestamp: number;
}

function getAttemptsInLastHour(): number {
  try {
    const stored = localStorage.getItem(ATTEMPTS_STORAGE_KEY);
    if (!stored) return 0;
    const attempts: AttemptRecord[] = JSON.parse(stored);
    const oneHourAgo = Date.now() - 60 * 60 * 1000;
    return attempts.filter((a) => a.timestamp > oneHourAgo).length;
  } catch {
    return 0;
  }
}

function recordFailedAttempt(): void {
  try {
    const stored = localStorage.getItem(ATTEMPTS_STORAGE_KEY);
    const attempts: AttemptRecord[] = stored ? JSON.parse(stored) : [];
    const oneHourAgo = Date.now() - 60 * 60 * 1000;
    const recent = attempts.filter((a) => a.timestamp > oneHourAgo);
    recent.push({ timestamp: Date.now() });
    localStorage.setItem(ATTEMPTS_STORAGE_KEY, JSON.stringify(recent));
  } catch {
    localStorage.setItem(
      ATTEMPTS_STORAGE_KEY,
      JSON.stringify([{ timestamp: Date.now() }])
    );
  }
}

interface AdminState {
  active: boolean;
  expiresAt: number | null;
}

function loadAdminState(): AdminState {
  try {
    const stored = localStorage.getItem(ADMIN_STORAGE_KEY);
    if (!stored) return { active: false, expiresAt: null };
    const parsed = JSON.parse(stored) as AdminState;
    if (!parsed.active) return { active: false, expiresAt: null };
    if (parsed.expiresAt && Date.now() > parsed.expiresAt) {
      localStorage.removeItem(ADMIN_STORAGE_KEY);
      return { active: false, expiresAt: null };
    }
    return parsed;
  } catch {
    return { active: false, expiresAt: null };
  }
}

function saveAdminState(state: AdminState): void {
  if (state.active) {
    localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(state));
  } else {
    localStorage.removeItem(ADMIN_STORAGE_KEY);
  }
}

interface AdminContextType {
  isAdmin: boolean;
  activate: (code: string) => Promise<{ success: boolean; error?: string }>;
  deactivate: () => void;
  attemptsRemaining: number;
}

const AdminContext = createContext<AdminContextType | null>(null);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AdminState>(() => loadAdminState());

  useEffect(() => {
    const stored = loadAdminState();
    setState(stored);
  }, []);

  useEffect(() => {
    if (!state.active) return;
    if (state.expiresAt && Date.now() > state.expiresAt) {
      setState({ active: false, expiresAt: null });
      saveAdminState({ active: false, expiresAt: null });
      return;
    }
    saveAdminState(state);
  }, [state]);

  const activate = useCallback(
    async (code: string): Promise<{ success: boolean; error?: string }> => {
      const remaining = MAX_ATTEMPTS_PER_HOUR - getAttemptsInLastHour();
      if (remaining <= 0) {
        return {
          success: false,
          error: "Too many attempts. Try again in an hour.",
        };
      }

      const hash = await hashInput(code);
      if (hash !== EXPECTED_HASH) {
        recordFailedAttempt();
        return { success: false, error: "Invalid code" };
      }

      const expiresAt = Date.now() + ADMIN_EXPIRY_HOURS * 60 * 60 * 1000;
      setState({ active: true, expiresAt });
      saveAdminState({ active: true, expiresAt });
      return { success: true };
    },
    []
  );

  const deactivate = useCallback(() => {
    setState({ active: false, expiresAt: null });
    localStorage.removeItem(ADMIN_STORAGE_KEY);
  }, []);

  const attemptsRemaining = MAX_ATTEMPTS_PER_HOUR - getAttemptsInLastHour();

  return (
    <AdminContext.Provider
      value={{
        isAdmin: state.active,
        activate,
        deactivate,
        attemptsRemaining: Math.max(0, attemptsRemaining),
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within AdminProvider");
  }
  return context;
}
