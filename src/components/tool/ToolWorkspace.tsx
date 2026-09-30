import { type ReactNode } from "react";
import { cn } from "@lib/cn";

interface ToolWorkspaceProps {
  children: ReactNode;
  preview?: ReactNode;
  result?: ReactNode;
  processing?: boolean;
  className?: string;
}

export function ToolWorkspace({
  children,
  preview,
  result,
  processing = false,
  className,
}: ToolWorkspaceProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Input area */}
      <div className="mb-6">{children}</div>

      {/* Preview */}
      {preview && (
        <div className="mb-6" aria-live="polite">
          {preview}
        </div>
      )}

      {/* Result */}
      {result && (
        <div
          className={cn(
            "rounded-2xl p-4",
            "bg-aha-mint/[0.03] border border-aha-mint/20"
          )}
          aria-live="polite"
        >
          {result}
        </div>
      )}

      {/* Processing overlay */}
      {processing && (
        <div
          role="status"
          aria-label="Processing"
          className={cn(
            "absolute inset-0 z-10 rounded-2xl",
            "bg-dark-bg/80 backdrop-blur-sm",
            "flex items-center justify-center"
          )}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-14 h-14">
              <span className="absolute inset-0 rounded-full border-3 border-white/10" />
              <span className="absolute inset-0 rounded-full border-3 border-transparent border-t-aha-cyan animate-spin" />
            </div>
            <p className="text-sm text-dark-textSecondary">Processing...</p>
          </div>
        </div>
      )}
    </div>
  );
}