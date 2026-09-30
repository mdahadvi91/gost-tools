import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import { STORAGE_KEYS, DEFAULT_LANGUAGE } from "@constants/config";
import type { Language } from "@types/common";

const SUPPORTED_LANGUAGES: Language[] = ["en", "bn", "ar"];
const RTL_LANGUAGES: Language[] = ["ar"];

interface LanguageContextValue {
  language: Language;
  isRTL: boolean;
  setLanguage: (lang: Language) => void;
  supportedLanguages: Language[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

function getStoredLanguage(): Language {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  try {
    const stored = localStorage.getItem(
      STORAGE_KEYS.language
    ) as Language | null;
    if (stored && SUPPORTED_LANGUAGES.includes(stored)) return stored;
    const browser = (navigator.language || "en").slice(0, 2) as Language;
    if (SUPPORTED_LANGUAGES.includes(browser)) return browser;
  } catch {
    // ignore
  }
  return DEFAULT_LANGUAGE;
}

function applyLanguageToDocument(lang: Language) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.setAttribute("lang", lang);
  root.setAttribute("dir", RTL_LANGUAGES.includes(lang) ? "rtl" : "ltr");
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = getStoredLanguage();
    setLanguageState(stored);
    applyLanguageToDocument(stored);
    setMounted(true);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    if (!SUPPORTED_LANGUAGES.includes(lang)) return;
    setLanguageState(lang);
    applyLanguageToDocument(lang);
    try {
      localStorage.setItem(STORAGE_KEYS.language, lang);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      isRTL: RTL_LANGUAGES.includes(language),
      setLanguage,
      supportedLanguages: SUPPORTED_LANGUAGES,
    }),
    [language, setLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}