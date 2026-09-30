import { cn } from "@lib/cn";

interface DividerProps {
  orientation?: "horizontal" | "vertical";
  variant?: "line" | "gradient" | "dots";
  label?: string;
  className?: string;
}

export function Divider({
  orientation = "horizontal",
  variant = "line",
  label,
  className,
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn("w-px self-stretch bg-white/10", className)}
      />
    );
  }

  if (label) {
    return (
      <div
        role="separator"
        className={cn("flex items-center gap-4 my-6", className)}
      >
        <span className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <span className="text-xs uppercase tracking-widest text-dark-textSecondary font-medium">
          {label}
        </span>
        <span className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div
        role="separator"
        className={cn(
          "h-px w-full bg-gradient-to-r from-transparent via-aha-cyan/40 to-transparent",
          className
        )}
      />
    );
  }

  if (variant === "dots") {
    return (
      <div
        role="separator"
        className={cn(
          "flex items-center justify-center gap-2 py-4",
          className
        )}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-white/20"
          />
        ))}
      </div>
    );
  }

  return (
    <div
      role="separator"
      className={cn("h-px w-full bg-white/10", className)}
    />
  );
}