import { motion } from "framer-motion";
import { cn } from "@lib/cn";

interface CategoryFilterProps {
  active: string;
  onChange: (slug: string) => void;
  className?: string;
}

const CATEGORIES = [
  { slug: "all", name: "All", count: 42 },
  { slug: "image", name: "Image", count: 12 },
  { slug: "pdf", name: "PDF", count: 8 },
  { slug: "qr", name: "QR & Barcode", count: 8 },
  { slug: "text", name: "Text", count: 6 },
  { slug: "developer", name: "Developer", count: 3 },
  { slug: "calculators", name: "Calculators", count: 5 },
];

export function CategoryFilter({
  active,
  onChange,
  className,
}: CategoryFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Tool categories"
      className={cn("flex flex-wrap items-center gap-2", className)}
    >
      {CATEGORIES.map((cat) => {
        const isActive = active === cat.slug;

        return (
          <button
            key={cat.slug}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(cat.slug)}
            className={cn(
              "relative inline-flex items-center gap-2 px-4 py-2 rounded-xl",
              "text-sm font-medium whitespace-nowrap",
              "transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-love-rose",
              isActive
                ? "text-love-pearl"
                : "text-dark-textSecondary hover:text-love-pearl hover:bg-love-rose/8"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="category-active"
                transition={{ type: "spring", stiffness: 500, damping: 32 }}
                className="absolute inset-0 rounded-xl bg-love-gradient shadow-glow-rose -z-10"
              />
            )}
            <span>{cat.name}</span>
            <span
              className={cn(
                "text-[10px] font-mono px-1.5 py-0.5 rounded-md",
                isActive
                  ? "bg-love-pearl/25 text-love-pearl"
                  : "bg-love-rose/8 text-love-blush/60"
              )}
            >
              {cat.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}