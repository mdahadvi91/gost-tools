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
  default: "bg-white/5 text-white/80 border-white/10",
  success: "bg-aha-mint/10 text-aha-mint border-aha-mint/30",
  warning: "bg-aha-gold/10 text-aha-gold border-aha-gold/30",
  error: "bg-aha-coral/10 text-aha-coral border-aha-coral/30",
  info: "bg-aha-cyan/10 text-aha-cyan border-aha-cyan/30",
  popular: "bg-logo-gradient text-white border-transparent",
  new: "bg-aha-violet/20 text-aha-magenta border-aha-violet/40",
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