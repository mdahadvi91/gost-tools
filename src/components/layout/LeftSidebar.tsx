import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@lib/cn";

interface Category {
  id: string;
  slug: string;
  name: string;
  icon: string;
  count: number;
}

const CATEGORIES: Category[] = [
  { id: "image", slug: "image", name: "Image Tools", icon: "/images/icons/image-tools.svg", count: 12 },
  { id: "pdf", slug: "pdf", name: "PDF Tools", icon: "/images/icons/pdf-tools.svg", count: 8 },
  { id: "qr", slug: "qr", name: "QR & Barcode", icon: "/images/icons/qr-tools.svg", count: 8 },
  { id: "text", slug: "text", name: "Text Tools", icon: "/images/icons/text-tools.svg", count: 6 },
  { id: "developer", slug: "developer", name: "Developer", icon: "/images/icons/dev-tools.svg", count: 3 },
  { id: "calculators", slug: "calculators", name: "Calculators", icon: "/images/icons/calculator-tools.svg", count: 5 },
];

interface LeftSidebarProps {
  className?: string;
}

export function LeftSidebar({ className }: LeftSidebarProps) {
  const location = useLocation();

  return (
    <aside
      className={cn(
        "hidden lg:flex flex-col",
        "w-64 shrink-0",
        "h-[calc(100vh-72px)] sticky top-[72px]",
        "overflow-y-auto",
        "py-6 pl-6 pr-2",
        "border-r border-love-rose/12",
        className
      )}
      aria-label="Tools navigation"
    >
      {/* All Tools link */}
      <NavLink
        to="/tools"
        className={({ isActive }) =>
          cn(
            "flex items-center gap-3 px-3 py-2.5 mb-2 rounded-xl",
            "text-sm font-medium",
            "transition-all duration-200",
            isActive || location.pathname === "/tools"
              ? "bg-love-rose/15 text-love-pearl shadow-glow-rose"
              : "text-dark-textSecondary hover:text-love-pearl hover:bg-love-rose/8"
          )
        }
      >
        <span className="w-6 h-6 rounded-lg bg-love-gradient flex items-center justify-center text-love-pearl text-xs font-bold">
          A
        </span>
        All Tools
      </NavLink>

      <div className="mt-4 mb-2 px-3">
        <p className="text-[11px] uppercase tracking-widest text-love-blush/50 font-semibold">
          Categories
        </p>
      </div>

      <nav className="flex flex-col gap-1" aria-label="Categories">
        {CATEGORIES.map((cat) => {
          const to = `/categories/${cat.slug}`;
          const isActive = location.pathname === to;

          return (
            <NavLink
              key={cat.id}
              to={to}
              className={cn(
                "group relative flex items-center gap-3 px-3 py-2.5 rounded-xl",
                "text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-love-rose/12 text-love-pearl"
                  : "text-dark-textSecondary hover:text-love-pearl hover:bg-love-rose/8"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="sidebar-active"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r-full bg-love-gradient"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}

              <img
                src={cat.icon}
                alt=""
                width={20}
                height={20}
                className={cn(
                  "shrink-0 transition-opacity",
                  isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"
                )}
                aria-hidden="true"
              />

              <span className="flex-1 truncate">{cat.name}</span>

              <span
                className={cn(
                  "text-[10px] font-mono px-1.5 py-0.5 rounded-md",
                  isActive
                    ? "bg-love-rose/20 text-love-pearl"
                    : "bg-love-rose/8 text-love-blush/60"
                )}
              >
                {cat.count}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer info */}
      <div className="mt-auto pt-6">
        <div className="rounded-xl p-3 bg-love-rose/5 border border-love-rose/15">
          <p className="text-xs text-dark-textSecondary leading-relaxed">
            <span className="text-love-mint font-medium">100% Private.</span>{" "}
            All tools run in your browser.
          </p>
        </div>
      </div>
    </aside>
  );
}