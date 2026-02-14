import type { ReactNode } from "react";
import { useAdmin } from "../../contexts/AdminContext";

interface AdminShellProps {
  children: ReactNode;
}

export function AdminShell({ children }: AdminShellProps) {
  const { isAdmin } = useAdmin();

  if (!isAdmin) {
    return <>{children}</>;
  }

  return (
    <div className="relative min-h-screen ring-1 ring-surface-300 dark:ring-surface-600 ring-inset">
      <div className="fixed top-20 right-4 z-50">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] text-[var(--text-primary)] text-xs font-medium">
          &#9881; Admin Mode
        </span>
      </div>
      {children}
    </div>
  );
}
