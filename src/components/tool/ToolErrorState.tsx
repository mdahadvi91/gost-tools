import { AlertTriangle, RefreshCw } from "lucide-react";
import { cn } from "@lib/cn";

interface ToolErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export function ToolErrorState({
  title = "Something went wrong",
  message = "This tool encountered an error. Please try again.",
  onRetry,
  className,
}: ToolErrorStateProps) {
  return (
    <div
      role="alert"
      className={cn(
        "flex flex-col items-center justify-center text-center",
        "min-h-[280px] p-8 rounded-2xl",
        "bg-aha-coral/5 border border-aha-coral/20",
        className
      )}
    >
      <div className="w-14 h-14 rounded-2xl bg-aha-coral/10 border border-aha-coral/30 flex items-center justify-center mb-4">
        <AlertTriangle
          className="w-7 h-7 text-aha-coral"
          aria-hidden="true"
        />
      </div>

      <h3 className="font-display font-semibold text-lg text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-dark-textSecondary max-w-sm mb-6">
        {message}
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className={cn(
            "inline-flex items-center gap-2 px-5 h-10 rounded-xl",
            "bg-white/5 border border-white/10 text-white text-sm font-medium",
            "hover:bg-white/10 hover:border-white/20 transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aha-cyan"
          )}
        >
          <RefreshCw className="w-4 h-4" aria-hidden="true" />
          Try again
        </button>
      )}
    </div>
  );
}