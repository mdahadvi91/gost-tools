
import { cn } from "@lib/cn";

interface AdPlaceholderProps {
  slot: string;
  height?: "small" | "medium" | "large" | "banner";
  className?: string;
}

const heightMap = {
  small: "min-h-[90px]",
  medium: "min-h-[200px]",
  large: "min-h-[280px]",
  banner: "min-h-[100px]",
};

/**
 * Visible only in dev mode.
 * In production, returns null unless explicitly enabled.
 */
export function AdPlaceholder({
  slot,
  height = "medium",
  className,
}: AdPlaceholderProps) {
  if (!import.meta.env.DEV) return null;

  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={cn(
        "flex items-center justify-center rounded-2xl",
        "border border-dashed border-white/10 bg-white/[0.02]",
        "text-xs uppercase tracking-widest text-dark-textSecondary/50 font-medium",
        heightMap[height],
        className
      )}
    >
      <div className="text-center px-4">
        <p className="mb-1 text-[10px] font-mono text-aha-cyan/40">
          [ AD SLOT ]
        </p>
        <p>{slot}</p>
      </div>
    </div>
  );
}