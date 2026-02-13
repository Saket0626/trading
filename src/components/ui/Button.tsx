import { forwardRef, type ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center font-medium rounded transition-colors duration-150 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    const variants = {
      primary: "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800",
      secondary: "border border-surface-300 dark:border-surface-600 text-surface-900 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-800",
      tertiary: "text-primary-600 dark:text-primary-400 hover:bg-surface-100 dark:hover:bg-surface-800",
      danger: "bg-red-600 text-white hover:bg-red-700",
    };
    const sizes = {
      sm: "px-3 py-1.5 text-sm gap-1.5",
      md: "px-4 py-2 text-sm gap-2",
      lg: "px-5 py-2.5 text-base gap-2",
    };

    return (
      <button
        ref={ref}
        className={clsx(base, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <div
            className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden
          />
        ) : (
          leftIcon
        )}
        {children}
        {!loading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
