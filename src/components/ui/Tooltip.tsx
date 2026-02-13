import { useState, useRef } from "react";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
}

export function Tooltip({ content, children, side = "top" }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          role="tooltip"
          className={`absolute z-50 px-3 py-2 text-sm text-white bg-surface-900 dark:bg-surface-950 rounded-lg shadow-lg border border-surface-700 max-w-xs ${
            side === "top"
              ? "bottom-full left-1/2 -translate-x-1/2 mb-2"
              : side === "bottom"
                ? "top-full left-1/2 -translate-x-1/2 mt-2"
                : side === "left"
                  ? "right-full top-1/2 -translate-y-1/2 mr-2"
                  : "left-full top-1/2 -translate-y-1/2 ml-2"
          }`}
        >
          {content}
        </div>
      )}
    </div>
  );
}
