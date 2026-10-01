import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ToolCard } from "./ToolCard";
import { tools } from "@data/tools";
import { cn } from "@lib/cn";

interface PopularToolsProps {
  className?: string;
}

export function PopularTools({ className }: PopularToolsProps) {
  const popular = tools.filter((t) => t.popular).slice(0, 6);

  if (popular.length === 0) return null;

  return (
    <section
      className={cn("py-12 sm:py-16", className)}
      aria-labelledby="popular-heading"
    >
      <div className="flex items-end justify-between mb-6 gap-4">
        <div>
          <h2
            id="popular-heading"
            className="font-display text-h2 font-bold text-love-pearl tracking-tight"
          >
            Most loved
          </h2>
          <p className="mt-1.5 text-sm text-dark-textSecondary">
            What people use the most 💕
          </p>
        </div>
        <Link
          to="/tools"
          className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-love-rose hover:text-love-deep transition-colors"
        >
          View all
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {popular.map((tool) => (
          <ToolCard
            key={tool.id}
            tool={{
              id: tool.id,
              name: tool.name,
              description: tool.description,
              path: tool.path,
              category: tool.category,
              icon: tool.icon,
              popular: tool.popular,
              newTool: tool.newTool,
            }}
          />
        ))}
      </div>
    </section>
  );
}
