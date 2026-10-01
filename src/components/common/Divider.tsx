import { cn } from "@lib/cn";

interface DividerProps {
  orientation?: "horizontal" | "vertical";
  variant?: "line" | "gradient" | "dots" | "heart";
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
        className={cn("w-px self-stretch bg-love-rose/15", className)}
      />
    );
  }

  if (label) {
    return (
      <div
        role="separator"
        className={cn("flex items-center gap-4 my-6", className)}
      >
        <span className="flex-1 h-px bg-gradient-to-r from-transparent via-love-rose/30 to-transparent" />
        <span className="text-xs uppercase tracking-widest text-love-blush/60 font-medium">
          {label}
        </span>
        <span className="flex-1 h-px bg-gradient-to-r from-transparent via-love-rose/30 to-transparent" />
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div
        role="separator"
        className={cn(
          "h-px w-full bg-gradient-to-r from-transparent via-love-rose/40 to-transparent",
          className
        )}
      />
    );
  }

  if (variant === "heart") {
    return (
      <div
        role="separator"
        className={cn(
          "flex items-center justify-center gap-3 py-6",
          className
        )}
      >
        <span className="flex-1 h-px bg-gradient-to-r from-transparent to-love-rose/30" />
        <svg
          className="w-4 h-4 text-love-rose"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <span className="flex-1 h-px bg-gradient-to-l from-transparent to-love-rose/30" />
      </div>
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
            className="w-1.5 h-1.5 rounded-full bg-love-rose/30"
          />
        ))}
      </div>
    );
  }

  return (
    <div
      role="separator"
      className={cn("h-px w-full bg-love-rose/15", className)}
    />
  );
}