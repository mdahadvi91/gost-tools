import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Check } from "lucide-react";
import { cn } from "@lib/cn";
import { useSound } from "@components/decorative/SoundController";

interface DownloadButtonProps {
  onDownload: () => void | Promise<void>;
  filename?: string;
  label?: string;
  successLabel?: string;
  disabled?: boolean;
  className?: string;
}

export function DownloadButton({
  onDownload,
  filename,
  label = "Download",
  successLabel = "Downloaded!",
  disabled = false,
  className,
}: DownloadButtonProps) {
  const { play } = useSound();
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const handleClick = async () => {
    if (state !== "idle") return;
    play("click");
    setState("loading");
    try {
      await onDownload();
      play("success");
      setState("done");
      window.setTimeout(() => setState("idle"), 2200);
    } catch {
      play("error");
      setState("idle");
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      disabled={disabled || state === "loading"}
      whileHover={state === "idle" ? { scale: 1.02 } : undefined}
      whileTap={state === "idle" ? { scale: 0.98 } : undefined}
      className={cn(
        "relative inline-flex items-center justify-center gap-2",
        "h-12 px-6 rounded-xl overflow-hidden",
        "font-medium text-white",
        "bg-logo-gradient shadow-glow-violet",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aha-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        "transition-all duration-300",
        className
      )}
      aria-live="polite"
    >
      {state === "idle" && (
        <>
          <Download className="w-5 h-5" aria-hidden="true" />
          {label}
        </>
      )}

      {state === "loading" && (
        <>
          <span
            className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin"
            aria-hidden="true"
          />
          Preparing...
        </>
      )}

      {state === "done" && (
        <>
          <Check className="w-5 h-5" aria-hidden="true" />
          {successLabel}
        </>
      )}

      {filename && state === "idle" && (
        <span className="sr-only">File: {filename}</span>
      )}
    </motion.button>
  );
}