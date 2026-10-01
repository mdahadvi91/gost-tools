import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@lib/cn";
import { Logo } from "@components/common/Logo";
import { SearchBar } from "@components/common/SearchBar";
import { ThemeToggle } from "@components/common/ThemeToggle";
import { LanguageToggle } from "@components/common/LanguageToggle";
import { HeartbeatHeart } from "@components/decorative/HeartbeatHeart";

interface HeaderProps {
  onMenuClick?: () => void;
  onRightPanelClick?: () => void;
  className?: string;
}

export function Header({
  onMenuClick,
  onRightPanelClick,
  className,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-300 ease-smooth",
        scrolled
          ? "bg-dark-bg/80 backdrop-blur-xl border-b border-love-rose/15 shadow-glass-dark"
          : "bg-transparent",
        className
      )}
    >
      {/* Rose gold accent line */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-love-gradient opacity-40"
      />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 h-16 lg:h-[72px]">
          {/* Mobile: Left menu */}
          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Open menu"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-love-rose/10 border border-love-rose/20 text-love-blush hover:text-white hover:bg-love-rose/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-love-rose"
          >
            <Menu className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Left heartbeat */}
          <HeartbeatHeart
            size="sm"
            intensity="calm"
            color="rose"
            className="hidden lg:inline-flex"
          />

          {/* Logo */}
          <Logo size="md" showText />

          {/* Center: Search */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-auto">
            <SearchBar />
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2 ml-auto lg:ml-0">
            {/* Mobile search toggle */}
            <button
              type="button"
              onClick={() => setMobileSearchOpen((o) => !o)}
              aria-label="Toggle search"
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-love-rose/10 border border-love-rose/20 text-love-blush hover:text-white hover:bg-love-rose/20 transition-colors"
            >
              {mobileSearchOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" strokeLinecap="round" />
                </svg>
              )}
            </button>

            <ThemeToggle className="hidden sm:inline-flex" />

            <LanguageToggle />

            {/* Right heartbeat */}
            <HeartbeatHeart
              size="sm"
              intensity="calm"
              color="lavender"
              className="hidden lg:inline-flex"
            />

            {/* Mobile right panel */}
            <button
              type="button"
              onClick={onRightPanelClick}
              aria-label="Open utility panel"
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-love-rose/10 border border-love-rose/20 text-love-blush hover:text-white hover:bg-love-rose/20 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile search expand */}
      <AnimatePresence>
        {mobileSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-t border-love-rose/10 bg-dark-bg/95 backdrop-blur-xl"
          >
            <div className="px-4 py-3">
              <SearchBar autoFocus onClose={() => setMobileSearchOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}