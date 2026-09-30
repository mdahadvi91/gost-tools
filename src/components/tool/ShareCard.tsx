import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { motion } from "framer-motion";
import { Share2, Copy, Check } from "lucide-react";
import { cn } from "@lib/cn";
import { Logo } from "@components/common/Logo";
import { useToast } from "@components/common/Toast";

interface ShareCardProps {
  toolName: string;
  resultSummary?: string;
  className?: string;
}

export function ShareCard({
  toolName,
  resultSummary,
  className,
}: ShareCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const toast = useToast();
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const handleDownload = async () => {
    if (!cardRef.current) return;
    setState("loading");
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: "#0A0B1E",
        scale: 2,
        logging: false,
        useCORS: true,
      });
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = `ahadex-${toolName.toLowerCase().replace(/\s+/g, "-")}.png`;
      link.href = dataUrl;
      link.click();
      setState("done");
      toast.success("Share card saved!");
      window.setTimeout(() => setState("idle"), 2200);
    } catch {
      setState("idle");
      toast.error("Could not generate share card.");
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard");
    } catch {
      toast.error("Could not copy link");
    }
  };

  return (
    <div className={cn("space-y-3", className)}>
      {/* Visible share card */}
      <div
        ref={cardRef}
        className={cn(
          "relative overflow-hidden rounded-2xl p-6",
          "bg-gradient-to-br from-dark-bg via-dark-surface to-dark-elevated",
          "border border-white/10"
        )}
      >
        <div
          aria-hidden="true"
          className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-aha-violet/20 blur-[60px]"
        />

        <div className="relative flex items-start justify-between gap-4 mb-6">
          <Logo size="sm" showText animated={false} linkTo={null} />
        </div>

        <p className="relative text-[10px] uppercase tracking-widest text-aha-cyan font-semibold mb-2">
          Result from
        </p>
        <h3 className="relative font-display font-bold text-xl text-white mb-2">
          {toolName}
        </h3>

        {resultSummary && (
          <p className="relative text-sm text-dark-textSecondary leading-relaxed mb-6">
            {resultSummary}
          </p>
        )}

        <div className="relative pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-dark-textSecondary">
            ahadex.fun
          </span>
          <span className="text-xs text-aha-mint font-medium">
            100% private
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        <motion.button
          type="button"
          onClick={handleDownload}
          whileTap={{ scale: 0.97 }}
          disabled={state === "loading"}
          className={cn(
            "inline-flex items-center gap-2 px-4 h-10 rounded-xl",
            "bg-white/5 border border-white/10 text-white text-sm font-medium",
            "hover:bg-white/10 hover:border-white/20 transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aha-cyan",
            "disabled:opacity-50"
          )}
        >
          {state === "done" ? (
            <Check className="w-4 h-4" aria-hidden="true" />
          ) : (
            <Share2 className="w-4 h-4" aria-hidden="true" />
          )}
          {state === "loading"
            ? "Generating..."
            : state === "done"
              ? "Saved!"
              : "Save share card"}
        </motion.button>

        <button
          type="button"
          onClick={handleCopyLink}
          className={cn(
            "inline-flex items-center gap-2 px-4 h-10 rounded-xl",
            "bg-white/5 border border-white/10 text-white text-sm font-medium",
            "hover:bg-white/10 hover:border-white/20 transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aha-cyan"
          )}
        >
          <Copy className="w-4 h-4" aria-hidden="true" />
          Copy link
        </button>
      </div>
    </div>
  );
}