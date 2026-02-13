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
          "rounded border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800",
          hover && "transition-colors duration-150 hover:border-surface-300 dark:hover:border-surface-600",
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
