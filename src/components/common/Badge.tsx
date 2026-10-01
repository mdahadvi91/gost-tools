import type { ReactNode } from "react";
import { cn } from "@lib/cn";

type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "popular"
  | "new";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: "sm" | "md";
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-love-rose/10 text-love-blush border-love-rose/25",
  success: "bg-love-mint/15 text-love-mint border-love-mint/35",
  warning: "bg-love-gold/15 text-love-gold border-love-gold/35",
  error: "bg-love-rose/15 text-love-rose border-love-rose/40",
  info: "bg-love-lavender/15 text-love-lavender border-love-lavender/35",
  popular: "bg-love-gradient text-white border-transparent shadow-glow-rose",
  new: "bg-love-deep/25 text-love-blush border-love-deep/45",
};

const sizeStyles = {
  sm: "px-2 py-0.5 text-[10px]",
  md: "px-2.5 py-1 text-xs",
};

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full border tracking-wide uppercase",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}