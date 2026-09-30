import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { STORAGE_KEYS } from "@constants/config";
import { UI_LIMITS } from "@constants/limits";

interface ToolContextValue {
  /** Recently used tool IDs (most recent first) */
  recentlyUsed: string[];
  /** Add a tool to the recently-used list */
  markUsed: (toolId: string) => void;
  /** Clear the recent list */
  clearRecent: () => void;
  /** True if a tool has been used at least once */
  hasUsed: (toolId: string) => boolean;
}

const ToolContext = createContext<ToolContextValue | null>(null);

export function useTools(): ToolContextValue {
  const ctx = useContext(ToolContext);
  if (!ctx) throw new Error("useTools must be used within ToolProvider");
  return ctx;
}

function readRecent(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.recentlyUsed);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.filter((x): x is string => typeof x === "string");
    }
  } catch {
    // ignore
  }
  return [];
}

function writeRecent(list: string[]) {
  try {
    localStorage.setItem(STORAGE_KEYS.recentlyUsed, JSON.stringify(list));
  } catch {
    // ignore
  }
}

export function ToolProvider({ children }: { children: ReactNode }) {
  const [recentlyUsed, setRecentlyUsed] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setRecentlyUsed(readRecent());
    setMounted(true);
  }, []);

  const markUsed = useCallback((toolId: string) => {
    setRecentlyUsed((prev) => {
      const filtered = prev.filter((id) => id !== toolId);
      const next = [toolId, ...filtered].slice(0, UI_LIMITS.recentToolsMax);
      writeRecent(next);
      return next;
    });
  }, []);

  const clearRecent = useCallback(() => {
    setRecentlyUsed([]);
    writeRecent([]);
  }, []);

  const hasUsed = useCallback(
    (toolId: string) => recentlyUsed.includes(toolId),
    [recentlyUsed]
  );

  const value = useMemo<ToolContextValue>(
    () => ({
      recentlyUsed,
      markUsed,
      clearRecent,
      hasUsed,
    }),
    [recentlyUsed, markUsed, clearRecent, hasUsed, mounted]
  );

  return <ToolContext.Provider value={value}>{children}</ToolContext.Provider>;
}