import { forwardRef, type HTMLAttributes } from "react";
import { clsx } from "clsx";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, padding = "md", children, ...props }, ref) => {
    const paddingClass = {
      none: "",
      sm: "p-4",
      md: "p-5",
      lg: "p-6",
    };

    return (
      <div
        ref={ref}
        className={clsx(
          "rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-[0_4px_24px_rgba(0,0,0,0.4)]",
          hover && "transition-all duration-250 hover:border-[#00D4AA40] hover:shadow-[var(--glow-teal)]",
          paddingClass[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
