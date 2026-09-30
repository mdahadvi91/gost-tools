import { ShieldCheck } from "lucide-react";
import { cn } from "@lib/cn";

interface ToolPrivacyNoteProps {
  message?: string;
  className?: string;
}

export function ToolPrivacyNote({
  message = "Your files are processed entirely in your browser. Nothing is uploaded to our servers.",
  className,
}: ToolPrivacyNoteProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 p-4 rounded-xl",
        "bg-aha-mint/5 border border-aha-mint/20",
        className
      )}
    >
      <div className="shrink-0 w-8 h-8 rounded-lg bg-aha-mint/10 flex items-center justify-center">
        <ShieldCheck
          className="w-4 h-4 text-aha-mint"
          aria-hidden="true"
        />
      </div>
      <p className="text-sm text-white/85 leading-relaxed pt-1.5">
        {message}
      </p>
    </div>
  );
}