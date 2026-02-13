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
    <div className="relative min-h-screen ring-2 ring-orange-500 ring-inset">
      <div className="fixed top-20 right-4 z-50">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 text-orange-950 text-sm font-semibold shadow-lg">
          &#9881; Admin Mode
        </span>
      </div>
      {children}
    </div>
  );
}
