import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, Command } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@lib/cn";
import { tools } from "@data/tools";

interface SearchBarProps {
  size?: "md" | "lg";
  placeholder?: string;
  autoFocus?: boolean;
  onClose?: () => void;
  className?: string;
}

interface SearchResult {
  id: string;
  name: string;
  description: string;
  path: string;
  category: string;
}

export function SearchBar({
  size = "md",
  placeholder = "Search tools...",
  autoFocus = false,
  onClose,
  className,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const results = useMemo<SearchResult[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return tools
      .filter((tool) => {
        const haystack = [
          tool.name,
          tool.description,
          tool.category,
          ...(tool.keywords ?? []),
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(q);
      })
      .slice(0, 8)
      .map((tool) => ({
        id: tool.id,
        name: tool.name,
        description: tool.description,
        path: tool.path,
        category: tool.category,
      }));
  }, [query]);

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelect = (result: SearchResult) => {
    navigate(result.path);
    setQuery("");
    setOpen(false);
    onClose?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const selected = results[activeIndex];
      if (selected) handleSelect(selected);
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  };

  const clear = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  const sizeClasses =
    size === "lg"
      ? "h-14 px-5 text-base rounded-2xl"
      : "h-11 px-4 text-sm rounded-xl";

  return (
    <div ref={wrapperRef} className={cn("relative w-full", className)}>
      <div
        className={cn(
          "flex items-center gap-3",
          "bg-white/5 backdrop-blur-xl border border-white/10",
          "focus-within:border-aha-cyan/50 focus-within:shadow-glow-cyan",
          "transition-all duration-300",
          sizeClasses
        )}
      >
        <Search
          className={cn(
            "flex-shrink-0 text-dark-textSecondary",
            size === "lg" ? "w-5 h-5" : "w-4 h-4"
          )}
          aria-hidden="true"
        />

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setActiveIndex(0);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          aria-label="Search tools"
          aria-expanded={open && results.length > 0}
          aria-autocomplete="list"
          role="combobox"
          className="flex-1 bg-transparent text-white placeholder:text-dark-textSecondary/60 focus:outline-none"
        />

        {query ? (
          <button
            type="button"
            onClick={clear}
            aria-label="Clear search"
            className="flex-shrink-0 p-1 rounded-md text-dark-textSecondary hover:text-white transition-colors"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        ) : (
          <kbd
            className="hidden sm:inline-flex items-center gap-0.5 px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-dark-textSecondary"
            aria-hidden="true"
          >
            <Command className="w-3 h-3" />K
          </kbd>
        )}
      </div>

      <AnimatePresence>
        {open && results.length > 0 && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "absolute top-full left-0 right-0 mt-2 py-2 z-50",
              "bg-dark-surface/95 backdrop-blur-xl",
              "border border-white/10 rounded-xl shadow-glass-dark",
              "max-h-[400px] overflow-y-auto"
            )}
          >
            {results.map((result, index) => (
              <li key={result.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => handleSelect(result)}
                  className={cn(
                    "w-full flex flex-col items-start gap-0.5 px-4 py-2.5 text-left transition-colors",
                    index === activeIndex
                      ? "bg-white/10"
                      : "hover:bg-white/5"
                  )}
                >
                  <span className="text-sm font-medium text-white">
                    {result.name}
                  </span>
                  <span className="text-xs text-dark-textSecondary line-clamp-1">
                    {result.description}
                  </span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}