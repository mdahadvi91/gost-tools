import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@lib/cn";
import { useReducedMotion } from "@hooks/useReducedMotion";
import { useLocalStorage } from "@hooks/useLocalStorage";

const STORAGE_KEY = "ahadex-buddy-dismissed";

const MESSAGES = [
  "Hi! I'm Aha 👋",
  "Try any tool — it's all free!",
  "Everything runs in your browser 🔒",
  "Need help? Check the FAQ!",
  "You're doing great! ✨",
  "New here? Try Image Compressor!",
  "No uploads. No tracking. Ever.",
];

interface AhaBuddyProps {
  position?: "bottom-right" | "bottom-left";
  autoShowDelay?: number;
  messageDuration?: number;
  className?: string;
}

export function AhaBuddy({
  position = "bottom-right",
  autoShowDelay = 6000,
  messageDuration = 5000,
  className,
}: AhaBuddyProps) {
  const [dismissed, setDismissed] = useLocalStorage(STORAGE_KEY, false);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (dismissed || prefersReduced) return;

    const timer = window.setTimeout(() => {
      setMessage(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
      setVisible(true);
    }, autoShowDelay);

    return () => window.clearTimeout(timer);
  }, [dismissed, autoShowDelay, prefersReduced]);

  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(() => setVisible(false), messageDuration);
    return () => window.clearTimeout(timer);
  }, [visible, messageDuration]);

  const handleClose = () => {
    setVisible(false);
    setDismissed(true);
  };

  if (dismissed || prefersReduced) return null;

  const posClass =
    position === "bottom-right"
      ? "bottom-4 right-4 sm:bottom-6 sm:right-6"
      : "bottom-4 left-4 sm:bottom-6 sm:left-6";

  return (
    <div
      className={cn(
        "fixed z-[9996] flex flex-col items-end gap-2 pointer-events-none",
        posClass,
        className
      )}
      aria-live="polite"
    >
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative max-w-[260px] mr-14 mb-1",
              "px-4 py-3 rounded-2xl rounded-br-sm",
              "bg-dark-surface/95 backdrop-blur-xl",
              "border border-aha-cyan/30",
              "text-sm text-white leading-relaxed",
              "shadow-glass-dark pointer-events-auto"
            )}
          >
            {message}

            <button
              type="button"
              onClick={handleClose}
              aria-label="Dismiss Aha"
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-dark-elevated border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            >
              <X className="w-3 h-3" aria-hidden="true" />
            </button>

            <span
              className="absolute -bottom-1 right-3 w-3 h-3 bg-dark-surface/95 border-r border-b border-aha-cyan/30 rotate-45"
              aria-hidden="true"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => {
          setMessage(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
          setVisible((v) => !v);
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        whileHover={prefersReduced ? undefined : { scale: 1.08 }}
        whileTap={prefersReduced ? undefined : { scale: 0.95 }}
        className={cn(
          "pointer-events-auto",
          "w-12 h-12 rounded-full",
          "bg-logo-gradient",
          "flex items-center justify-center",
          "text-white text-xl font-bold",
          "shadow-glow-violet",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aha-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
        )}
        aria-label="Aha assistant"
      >
        <motion.span
          animate={
            prefersReduced
              ? {}
              : { y: [0, -3, 0] }
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          A
        </motion.span>
      </motion.button>
    </div>
  );
}