import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@lib/cn";
import { Badge } from "@components/common/Badge";
import { useReducedMotion } from "@hooks/useReducedMotion";

export interface ToolCardData {
  id: string;
  name: string;
  description: string;
  path: string;
  category: string;
  icon?: string;
  popular?: boolean;
  newTool?: boolean;
}

interface ToolCardProps {
  tool: ToolCardData;
  className?: string;
}

const categoryIcons: Record<string, string> = {
  image: "/images/icons/image-tools.svg",
  pdf: "/images/icons/pdf-tools.svg",
  qr: "/images/icons/qr-tools.svg",
  text: "/images/icons/text-tools.svg",
  developer: "/images/icons/dev-tools.svg",
  calculators: "/images/icons/calculator-tools.svg",
};

export function ToolCard({ tool, className }: ToolCardProps) {
  const prefersReduced = useReducedMotion();
  const icon = tool.icon ?? categoryIcons[tool.category] ?? categoryIcons.image;

  return (
    <motion.div
      whileHover={prefersReduced ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={className}
    >
      <Link
        to={tool.path}
        className={cn(
          "group relative flex flex-col gap-3 p-5",
          "rounded-2xl bg-dark-surface border border-white/10",
          "hover:border-aha-cyan/40 hover:shadow-glow-cyan",
          "transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aha-cyan"
        )}
      >
        {/* Top row: icon + badges */}
        <div className="flex items-start justify-between gap-3">
          <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <img
              src={icon}
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
              className="opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 justify-end">
            {tool.popular && (
              <Badge variant="popular" size="sm">
                Popular
              </Badge>
            )}
            {tool.newTool && (
              <Badge variant="new" size="sm">
                New
              </Badge>
            )}
          </div>
        </div>

        {/* Name + description */}
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-base text-white group-hover:text-aha-cyan transition-colors truncate">
            {tool.name}
          </h3>
          <p className="mt-1 text-sm text-dark-textSecondary line-clamp-2 leading-relaxed">
            {tool.description}
          </p>
        </div>

        {/* Bottom row: arrow */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <span className="text-[11px] uppercase tracking-widest text-dark-textSecondary/70 font-medium">
            {tool.category}
          </span>
          <ArrowRight
            className="w-4 h-4 text-dark-textSecondary group-hover:text-aha-cyan group-hover:translate-x-0.5 transition-all"
            aria-hidden="true"
          />
        </div>
      </Link>
    </motion.div>
  );
}