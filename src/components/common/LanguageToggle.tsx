import { useState, useRef, useEffect } from "react";
import { Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@lib/cn";

export type Language = "en" | "bn" | "ar";

const LANGUAGES: { code: Language; label: string; native: string; flag: string }[] = [
  { code: "en", label: "English", native: "English", flag: "🇬🇧" },
  { code: "bn", label: "Bengali", native: "বাংলা", flag: "🇧🇩" },
  { code: "ar", label: "Arabic", native: "العربية", flag: "🇸🇦" },
];

const STORAGE_KEY = "ahadex-language";

function getStoredLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored && ["en", "bn", "ar"].includes(stored)) return stored;
  const browser = (navigator.language || "en").slice(0, 2) as Language;
  return ["en", "bn", "ar"].includes(browser) ? browser : "en";
}

export function LanguageToggle({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Language>("en");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLang(getStoredLanguage());
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSelect = (code: Language) => {
    setLang(code);
    localStorage.setItem(STORAGE_KEY, code);
    document.documentElement.setAttribute("lang", code);
    document.documentElement.setAttribute("dir", code === "ar" ? "rtl" : "ltr");
    setOpen(false);
  };

  const current = LANGUAGES.find((l) => l.code === lang);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Change language"
        aria-expanded={open}
        aria-haspopup="listbox"
        className={cn(
          "inline-flex items-center justify-center gap-2",
          "h-10 px-3 rounded-xl",
          "bg-white/5 hover:bg-white/10",
          "border border-white/10 hover:border-white/20",
          "text-white/80 hover:text-white text-sm font-medium",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aha-cyan",
          "transition-all duration-300"
        )}
      >
        <Globe className="w-4 h-4" aria-hidden="true" />
        <span className="hidden sm:inline">{current?.code.toUpperCase()}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            role="listbox"
            className={cn(
              "absolute right-0 mt-2 min-w-[180px] py-2 z-50",
              "bg-dark-surface/95 backdrop-blur-xl",
              "border border-white/10 rounded-xl shadow-glass-dark",
              "overflow-hidden"
            )}
          >
            {LANGUAGES.map((l) => (
              <li key={l.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={lang === l.code}
                  onClick={() => handleSelect(l.code)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-2.5",
                    "text-left text-sm transition-colors",
                    lang === l.code
                      ? "bg-white/10 text-white"
                      : "text-dark-textSecondary hover:bg-white/5 hover:text-white"
                  )}
                >
                  <span className="text-lg" aria-hidden="true">
                    {l.flag}
                  </span>
                  <span className="flex-1">{l.native}</span>
                  {lang === l.code && (
                    <Check className="w-4 h-4 text-aha-cyan" aria-hidden="true" />
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}