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
        "border-r border-white/5",
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
              ? "bg-white/10 text-white shadow-glow-cyan"
              : "text-dark-textSecondary hover:text-white hover:bg-white/5"
          )
        }
      >
        <span className="w-6 h-6 rounded-lg bg-logo-gradient flex items-center justify-center text-white text-xs font-bold">
          A
        </span>
        All Tools
      </NavLink>

      <div className="mt-4 mb-2 px-3">
        <p className="text-[11px] uppercase tracking-widest text-dark-textSecondary/70 font-semibold">
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
                  ? "bg-white/10 text-white"
                  : "text-dark-textSecondary hover:text-white hover:bg-white/5"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="sidebar-active"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r-full bg-logo-gradient"
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
                    ? "bg-white/10 text-white/80"
                    : "bg-white/5 text-dark-textSecondary"
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
        <div className="rounded-xl p-3 bg-white/5 border border-white/10">
          <p className="text-xs text-dark-textSecondary leading-relaxed">
            <span className="text-aha-mint font-medium">100% Private.</span>{" "}
            All tools run in your browser.
          </p>
        </div>
      </div>
    </aside>
  );
}