import { useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Home, Wrench, Info, Mail, Github } from "lucide-react";
import { cn } from "@lib/cn";
import { Logo } from "@components/common/Logo";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const CATEGORIES = [
  { slug: "image", name: "Image Tools", icon: "/images/icons/image-tools.svg", count: 12 },
  { slug: "pdf", name: "PDF Tools", icon: "/images/icons/pdf-tools.svg", count: 8 },
  { slug: "qr", name: "QR & Barcode", icon: "/images/icons/qr-tools.svg", count: 8 },
  { slug: "text", name: "Text Tools", icon: "/images/icons/text-tools.svg", count: 6 },
  { slug: "developer", name: "Developer", icon: "/images/icons/dev-tools.svg", count: 3 },
  { slug: "calculators", name: "Calculators", icon: "/images/icons/calculator-tools.svg", count: 5 },
];

const MAIN_LINKS = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/tools", label: "All Tools", Icon: Wrench },
  { to: "/about", label: "About", Icon: Info },
  { to: "/contact", label: "Contact", Icon: Mail },
];

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const location = useLocation();

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

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

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />

          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 34 }}
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            className="fixed top-0 left-0 bottom-0 z-[71] w-[85vw] max-w-sm bg-dark-bg border-r border-white/10 overflow-y-auto lg:hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <Logo size="sm" showText animated={false} linkTo={null} />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="p-4 space-y-6" aria-label="Primary">
              {/* Main links */}
              <div className="space-y-1">
                {MAIN_LINKS.map(({ to, label, Icon }) => {
                  const isActive =
                    to === "/"
                      ? location.pathname === "/"
                      : location.pathname.startsWith(to);

                  return (
                    <NavLink
                      key={to}
                      to={to}
                      className={cn(
                        "flex items-center gap-3 px-3 py-3 rounded-xl",
                        "text-sm font-medium transition-all",
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-dark-textSecondary hover:text-white hover:bg-white/5"
                      )}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                      {label}
                    </NavLink>
                  );
                })}
              </div>

              {/* Categories */}
              <div>
                <p className="px-3 mb-2 text-[11px] uppercase tracking-widest text-dark-textSecondary/70 font-semibold">
                  Categories
                </p>
                <div className="space-y-1">
                  {CATEGORIES.map((cat) => {
                    const to = `/categories/${cat.slug}`;
                    const isActive = location.pathname === to;

                    return (
                      <Link
                        key={cat.slug}
                        to={to}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2.5 rounded-xl",
                          "text-sm font-medium transition-all",
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-dark-textSecondary hover:text-white hover:bg-white/5"
                        )}
                      >
                        <img
                          src={cat.icon}
                          alt=""
                          width={20}
                          height={20}
                          className="shrink-0 opacity-70"
                          aria-hidden="true"
                        />
                        <span className="flex-1 truncate">{cat.name}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-white/5 text-dark-textSecondary">
                          {cat.count}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* GitHub */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="https://github.com/mdahadvi91/gost-tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/5 border border-white/10 text-dark-textSecondary hover:text-white hover:border-white/20 transition-all"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm">View on GitHub</span>
                </a>
              </div>

              <p className="text-xs text-center text-dark-textSecondary/60 pt-2">
                AHADEX Tools v1.0
              </p>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}