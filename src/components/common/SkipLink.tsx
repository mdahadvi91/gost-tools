import { cn } from "@lib/cn";

interface SkipLinkProps {
  targetId?: string;
  label?: string;
  className?: string;
}

export function SkipLink({
  targetId = "main-content",
  label = "Skip to main content",
  className,
}: SkipLinkProps) {
  return (
    <a
      href={`#${targetId}`}
      className={cn(
        "sr-only focus:not-sr-only",
        "focus:fixed focus:top-4 focus:left-4 focus:z-[10000]",
        "focus:px-5 focus:py-3 focus:rounded-xl",
        "focus:bg-logo-gradient focus:text-white focus:font-medium",
        "focus:shadow-glow-violet",
        "focus:outline-none focus:ring-2 focus:ring-white",
        className
      )}
    >
      {label}
    </a>
  );
}