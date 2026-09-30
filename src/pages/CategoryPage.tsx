import { useEffect, useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import { ToolCard } from "@components/home/ToolCard";
import { SEO } from "@components/seo/SEO";
import { BreadcrumbSchema } from "@components/seo/BreadcrumbSchema";
import { getCategoryBySlug } from "@data/categories";
import { tools } from "@data/tools";
import { buildCategorySEO } from "@lib/seo";
import { analytics } from "@lib/analytics";
import { Divider } from "@components/common/Divider";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryBySlug(slug) : undefined;

  const seo = useMemo(
    () => (category ? buildCategorySEO(category) : null),
    [category]
  );

  const categoryTools = useMemo(
    () => (category ? tools.filter((t) => t.category === category.id) : []),
    [category]
  );

  useEffect(() => {
    if (category) {
      analytics.trackPageView(`/categories/${category.slug}`, category.name);
      analytics.categoryOpen(category.slug);
    }
  }, [category]);

  if (!category || !seo) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEO seo={seo} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "All Tools", url: "/tools" },
          { name: category.name, url: `/categories/${category.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="py-8 lg:py-12">
        <div className="flex items-start gap-5 mb-4">
          <div
            className="shrink-0 w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center"
            style={{ backgroundColor: `${category.color}15` }}
          >
            <img
              src={category.icon}
              alt=""
              width={32}
              height={32}
              aria-hidden="true"
            />
          </div>
          <div className="min-w-0">
            <h1 className="font-display text-h1 font-bold text-white tracking-tight">
              {category.name}
            </h1>
            <p className="mt-1 text-sm text-dark-textSecondary">
              {categoryTools.length} tool
              {categoryTools.length === 1 ? "" : "s"} available
            </p>
          </div>
        </div>

        <p className="text-base sm:text-lg text-dark-textSecondary max-w-3xl leading-relaxed">
          {category.description}
        </p>
      </section>

      <Divider variant="gradient" />

      {/* Tool grid */}
      <section className="py-8 lg:py-12" aria-label={`${category.name} tools`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categoryTools.map((tool) => (
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
    </>
  );
}