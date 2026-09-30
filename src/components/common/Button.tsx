import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { cn } from "@lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  to?: string;
  href?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-logo-gradient text-white shadow-glow-violet hover:shadow-glow-magenta active:scale-[0.98]",
  secondary:
    "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20",
  ghost:
    "bg-transparent text-white/80 hover:text-white hover:bg-white/5",
  danger:
    "bg-aha-coral text-white hover:bg-aha-coral/90 shadow-glow-coral",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-3 text-sm gap-1.5 rounded-lg",
  md: "h-11 px-5 text-base gap-2 rounded-xl",
  lg: "h-14 px-8 text-lg gap-2.5 rounded-2xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      size = "md",
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      to,
      href,
      className,
      children,
      disabled,
      ...rest
    },
    ref
  ) {
    const isDisabled = disabled || loading;
    const classes = cn(
      "inline-flex items-center justify-center font-medium",
      "transition-all duration-300 ease-smooth",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aha-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg",
      "disabled:opacity-50 disabled:pointer-events-none",
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && "w-full",
      className
    );

    const content = (
      <>
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
        ) : (
          leftIcon
        )}
        {children}
        {!loading && rightIcon}
      </>
    );

    if (to) {
      return (
        <Link to={to} className={classes}>
          {content}
        </Link>
      );
    }

    if (href) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={isDisabled}
        aria-busy={loading}
        {...rest}
      >
        {content}
      </button>
    );
  }
);