import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { ToolCard } from "./ToolCard";
import { CategoryFilter } from "./CategoryFilter";
import { EmptySearchState } from "./EmptySearchState";
import { tools } from "@data/tools";
import { cn } from "@lib/cn";

interface ToolsGridProps {
  className?: string;
}

export function ToolsGrid({ className }: ToolsGridProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter((tool) => {
      const matchesCategory =
        category === "all" || tool.category === category;
      if (!matchesCategory) return false;
      if (!q) return true;

      const haystack = [
        tool.name,
        tool.description,
        tool.category,
        ...(tool.keywords ?? []),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [query, category]);

  return (
    <section
      className={cn("py-12 sm:py-16", className)}
      aria-labelledby="all-tools-heading"
    >
      <div className="flex flex-col gap-5 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2
              id="all-tools-heading"
              className="font-display text-h2 font-bold text-love-pearl tracking-tight"
            >
              All tools
            </h2>
            <p className="mt-1.5 text-sm text-dark-textSecondary">
              {filtered.length} tool{filtered.length === 1 ? "" : "s"} available
            </p>
          </div>

          {/* Search input */}
          <div className="relative sm:w-72">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-love-blush/60"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter tools..."
              aria-label="Filter tools"
              className={cn(
                "w-full h-11 pl-10 pr-4 rounded-xl",
                "bg-love-rose/5 border border-love-rose/15",
                "text-sm text-love-pearl placeholder:text-love-blush/40",
                "focus:outline-none focus:border-love-rose/50 focus:shadow-glow-rose",
                "transition-all duration-200"
              )}
            />
          </div>
        </div>

        <CategoryFilter active={category} onChange={setCategory} />
      </div>

      {filtered.length === 0 ? (
        <EmptySearchState
          query={query}
          onClear={() => {
            setQuery("");
            setCategory("all");
          }}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((tool) => (
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
      )}
    </section>
  );
}