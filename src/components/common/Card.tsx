import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "elevated" | "interactive" | "rose";
  padding?: "none" | "sm" | "md" | "lg";
  children: ReactNode;
}

const variantStyles = {
  default:
    "bg-dark-surface border border-love-rose/12",
  glass:
    "bg-love-rose/5 backdrop-blur-xl border border-love-rose/15",
  elevated:
    "bg-dark-elevated border border-love-rose/12 shadow-glass-dark",
  interactive:
    "bg-dark-surface border border-love-rose/12 hover:border-love-rose/40 hover:shadow-glow-rose transition-all duration-300 cursor-pointer",
  rose:
    "bg-gradient-to-br from-love-rose/8 via-dark-surface to-love-lavender/8 border border-love-rose/20",
};

const paddingStyles = {
  none: "",
  sm: "p-3",
  md: "p-5",
  lg: "p-8",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = "default", padding = "md", className, children, ...rest },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl",
        variantStyles[variant],
        paddingStyles[padding],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
});