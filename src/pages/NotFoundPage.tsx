import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Home, Search } from "lucide-react";
import { Button } from "@components/common/Button";
import { SearchBar } from "@components/common/SearchBar";
import { ToolCard } from "@components/home/ToolCard";
import { SEO } from "@components/seo/SEO";
import { buildNotFoundSEO } from "@lib/seo";
import { getPopularTools } from "@data/tools";

export default function NotFoundPage() {
  const seo = useMemo(() => buildNotFoundSEO(), []);
  const popular = useMemo(() => getPopularTools(4), []);

  return (
    <>
      <SEO seo={seo} />

      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center py-16 px-4">
        <p className="font-display font-bold text-[120px] sm:text-[180px] leading-none bg-logo-gradient bg-clip-text text-transparent mb-4 select-none">
          404
        </p>

        <h1 className="font-display text-h2 font-bold text-white tracking-tight mb-3">
          Page not found
        </h1>

        <p className="text-base text-dark-textSecondary max-w-md mb-8 leading-relaxed">
          The page you're looking for doesn't exist, or has been moved.
          Try searching for a tool below.
        </p>

        <div className="w-full max-w-md mb-8">
          <SearchBar placeholder="Search tools..." size="lg" />
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Button
            to="/"
            leftIcon={<Home className="w-4 h-4" aria-hidden="true" />}
          >
            Go home
          </Button>
          <Button
            to="/tools"
            variant="secondary"
            leftIcon={<Search className="w-4 h-4" aria-hidden="true" />}
          >
            Browse all tools
          </Button>
        </div>
      </section>

      {popular.length > 0 && (
        <section className="pb-16" aria-labelledby="popular-404-heading">
          <h2
            id="popular-404-heading"
            className="font-display text-h3 font-bold text-white mb-6 text-center"
          >
            Popular tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
      )}
    </>
  );
}