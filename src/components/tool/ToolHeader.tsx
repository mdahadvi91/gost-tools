import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@components/common/Badge";
import { AnimatedBackButton } from "@components/common/AnimatedBackButton";
import { cn } from "@lib/cn";
import { useReducedMotion } from "@hooks/useReducedMotion";

interface ToolHeaderProps {
  name: string;
  category: { slug: string; name: string };
  subtitle?: string;
  popular?: boolean;
  newTool?: boolean;
  className?: string;
}

export function ToolHeader({
  name,
  category,
  subtitle,
  popular,
  newTool,
  className,
}: ToolHeaderProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.header
      initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn("mb-8", className)}
    >
      <div className="mb-5">
        <AnimatedBackButton label="All tools" fallbackTo="/tools" />
      </div>

      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex items-center flex-wrap gap-1.5 text-sm">
          <li>
            <Link
              to="/"
              className="text-dark-textSecondary hover:text-white transition-colors"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-dark-textSecondary/40">
            /
          </li>
          <li>
            <Link
              to={`/categories/${category.slug}`}
              className="text-dark-textSecondary hover:text-white transition-colors"
            >
              {category.name}
            </Link>
          </li>
          <li aria-hidden="true" className="text-dark-textSecondary/40">
            /
          </li>
          <li
            className="text-white font-medium truncate max-w-[200px]"
            aria-current="page"
          >
            {name}
          </li>
        </ol>
      </nav>

      <div className="flex flex-wrap items-start gap-3 mb-3">
        <h1 className="font-display text-h1 font-bold text-white tracking-tight">
          {name}
        </h1>
        {popular && <Badge variant="popular">Popular</Badge>}
        {newTool && <Badge variant="new">New</Badge>}
      </div>

      {subtitle && (
        <p className="text-base sm:text-lg text-dark-textSecondary max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.header>
  );
}