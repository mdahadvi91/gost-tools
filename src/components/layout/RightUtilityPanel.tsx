import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sun,
  Moon,
  Monitor,
  Volume2,
  VolumeX,
  Github,
  Mail,
} from "lucide-react";
import { cn } from "@lib/cn";
import { useSound } from "@contexts/SoundContext";

interface RightUtilityPanelProps {
  open: boolean;
  onClose: () => void;
}

type Theme = "light" | "dark" | "system";

const STORAGE_THEME_KEY = "ahadex-theme";
const STORAGE_LANG_KEY = "ahadex-language";

const THEMES: { value: Theme; label: string; Icon: typeof Sun }[] = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
];

const LANGUAGES = [
  { code: "en", native: "English", flag: "🇬🇧" },
  { code: "bn", native: "বাংলা", flag: "🇧🇩" },
  { code: "ar", native: "العربية", flag: "🇸🇦" },
];

export function RightUtilityPanel({ open, onClose }: RightUtilityPanelProps) {
  const { soundEnabled, toggleSound } = useSound();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const currentTheme =
    (typeof window !== "undefined"
      ? (localStorage.getItem(STORAGE_THEME_KEY) as Theme | null)
      : null) ?? "system";

  const currentLang =
    (typeof window !== "undefined"
      ? localStorage.getItem(STORAGE_LANG_KEY)
      : null) ?? "en";

  const setTheme = (theme: Theme) => {
    localStorage.setItem(STORAGE_THEME_KEY, theme);
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("light", !isDark);
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  };

  const setLang = (code: string) => {
    localStorage.setItem(STORAGE_LANG_KEY, code);
    document.documentElement.setAttribute("lang", code);
    document.documentElement.setAttribute(
      "dir",
      code === "ar" ? "rtl" : "ltr"
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-love-black/70 backdrop-blur-md lg:hidden"
            aria-hidden="true"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 34 }}
            role="dialog"
            aria-modal="true"
            aria-label="Utility panel"
            className="fixed top-0 right-0 bottom-0 z-[61] w-[85vw] max-w-sm bg-dark-bg border-l border-love-rose/20 overflow-y-auto lg:hidden"
          >
            {/* Rose gold top line */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 h-[2px] bg-love-gradient"
            />

            <div className="flex items-center justify-between p-4 border-b border-love-rose/15">
              <h2 className="font-display font-semibold text-lg text-love-pearl">
                Settings
              </h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close panel"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-love-blush/70 hover:text-love-pearl hover:bg-love-rose/10 transition-colors"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="p-4 space-y-6">
              {/* Theme */}
              <section>
                <p className="text-xs uppercase tracking-widest text-love-blush/60 font-semibold mb-3">
                  Theme
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {THEMES.map(({ value, label, Icon }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setTheme(value)}
                      className={cn(
                        "flex flex-col items-center gap-1.5 py-3 rounded-xl",
                        "border transition-all duration-200",
                        currentTheme === value
                          ? "bg-love-rose/15 border-love-rose/50 text-love-pearl shadow-glow-rose"
                          : "bg-love-rose/5 border-love-rose/15 text-love-blush/70 hover:border-love-rose/30"
                      )}
                      aria-pressed={currentTheme === value}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                      <span className="text-xs font-medium">{label}</span>
                    </button>
                  ))}
                </div>
              </section>

              {/* Language */}
              <section>
                <p className="text-xs uppercase tracking-widest text-love-blush/60 font-semibold mb-3">
                  Language
                </p>
                <div className="space-y-2">
                  {LANGUAGES.map(({ code, native, flag }) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => setLang(code)}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-3 rounded-xl",
                        "border transition-all duration-200",
                        currentLang === code
                          ? "bg-love-rose/15 border-love-rose/50 text-love-pearl"
                          : "bg-love-rose/5 border-love-rose/15 text-love-blush/70 hover:border-love-rose/30"
                      )}
                      aria-pressed={currentLang === code}
                    >
                      <span className="text-lg" aria-hidden="true">
                        {flag}
                      </span>
                      <span className="flex-1 text-sm font-medium text-left">
                        {native}
                      </span>
                      {currentLang === code && (
                        <span className="w-2 h-2 rounded-full bg-love-rose shadow-glow-rose" />
                      )}
                    </button>
                  ))}
                </div>
              </section>

              {/* Sound */}
              <section>
                <p className="text-xs uppercase tracking-widest text-love-blush/60 font-semibold mb-3">
                  Sound
                </p>
                <button
                  type="button"
                  onClick={toggleSound}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl",
                    "border transition-all duration-200",
                    "bg-love-rose/5 border-love-rose/15 hover:border-love-rose/30"
                  )}
                  aria-pressed={soundEnabled}
                >
                  {soundEnabled ? (
                    <Volume2
                      className="w-5 h-5 text-love-rose"
                      aria-hidden="true"
                    />
                  ) : (
                    <VolumeX className="w-5 h-5" aria-hidden="true" />
                  )}
                  <span className="flex-1 text-sm font-medium text-left text-love-pearl">
                    Sound Effects
                  </span>
                  <span
                    className={cn(
                      "relative w-10 h-6 rounded-full transition-colors",
                      soundEnabled ? "bg-love-rose" : "bg-love-rose/20"
                    )}
                  >
                    <span
                      className={cn(
                        "absolute top-0.5 w-5 h-5 rounded-full bg-love-pearl transition-transform shadow-sm",
                        soundEnabled ? "translate-x-4" : "translate-x-0.5"
                      )}
                    />
                  </span>
                </button>
              </section>

              {/* Links */}
              <section>
                <p className="text-xs uppercase tracking-widest text-love-blush/60 font-semibold mb-3">
                  More
                </p>
                <div className="space-y-2">
                  <a
                    href="https://github.com/mdahadvi91/gost-tools"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-love-rose/5 border border-love-rose/15 text-love-blush/70 hover:text-love-pearl hover:border-love-rose/30 transition-all"
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                    <span className="text-sm">View on GitHub</span>
                  </a>
                  <a
                    href="mailto:mdahadvi91@gmail.com"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-love-rose/5 border border-love-rose/15 text-love-blush/70 hover:text-love-pearl hover:border-love-rose/30 transition-all"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <span className="text-sm">Contact us</span>
                  </a>
                </div>
              </section>

              <p className="text-xs text-center text-love-blush/40 pt-4">
                AHADEX Tools v1.0
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}