import { cn } from "@lib/cn";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
}

const sizeMap = {
  sm: "w-4 h-4 border-2",
  md: "w-8 h-8 border-[3px]",
  lg: "w-12 h-12 border-4",
};

export function LoadingSpinner({
  size = "md",
  label,
  className,
}: LoadingSpinnerProps) {
  return (
    <div
      role="status"
      aria-label={label ?? "Loading"}
      className={cn(
        "inline-flex flex-col items-center justify-center gap-3",
        className
      )}
    >
      <div
        className={cn(
          "rounded-full border-love-rose/15 border-t-love-rose animate-spin",
          sizeMap[size]
        )}
        aria-hidden="true"
      />
      {label && (
        <p className="text-sm text-love-blush/70">{label}</p>
      )}
    </div>
  );
}