import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@lib/cn";

type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "ahadex-theme";

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "system";
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  return stored ?? "system";
}

function applyTheme(theme: Theme) {
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.classList.toggle("light", !isDark);
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(getStoredTheme());
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (theme === "system") applyTheme("system");
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme, mounted]);

  const cycleTheme = () => {
    setTheme((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "system";
      return "light";
    });
  };

  const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;
  const label =
    theme === "light"
      ? "Light theme"
      : theme === "dark"
        ? "Dark theme"
        : "System theme";

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label={`Current: ${label}. Click to switch.`}
      title={label}
      className={cn(
        "relative inline-flex items-center justify-center",
        "w-10 h-10 rounded-xl",
        "bg-white/5 hover:bg-white/10",
        "border border-white/10 hover:border-white/20",
        "text-white/80 hover:text-white",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aha-cyan",
        "transition-all duration-300",
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.25 }}
          className="inline-flex"
        >
          <Icon className="w-5 h-5" aria-hidden="true" />
        </motion.span>
      </AnimatePresence>
    </button>
  );
}