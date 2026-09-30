import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@lib/cn";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center gap-1.5 text-sm", className)}
    >
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-dark-textSecondary hover:text-white transition-colors"
        aria-label="Home"
      >
        <Home className="w-4 h-4" aria-hidden="true" />
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={index} className="inline-flex items-center gap-1.5">
            <ChevronRight
              className="w-3.5 h-3.5 text-dark-textSecondary/50"
              aria-hidden="true"
            />
            {isLast || !item.to ? (
              <span
                className="text-white font-medium truncate max-w-[200px]"
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.to}
                className="text-dark-textSecondary hover:text-white transition-colors truncate max-w-[200px]"
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}