import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "elevated" | "interactive";
  padding?: "none" | "sm" | "md" | "lg";
  children: ReactNode;
}

const variantStyles = {
  default: "bg-dark-surface border border-white/10",
  glass: "bg-white/5 backdrop-blur-xl border border-white/10",
  elevated: "bg-dark-elevated border border-white/10 shadow-glass-dark",
  interactive:
    "bg-dark-surface border border-white/10 hover:border-aha-cyan/40 hover:shadow-glow-cyan transition-all duration-300 cursor-pointer",
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