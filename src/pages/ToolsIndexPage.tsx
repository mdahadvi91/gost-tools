import { useMemo } from "react";
import { ToolsGrid } from "@components/home/ToolsGrid";
import { SEO } from "@components/seo/SEO";
import { BreadcrumbSchema } from "@components/seo/BreadcrumbSchema";
import type { PageSEO } from "@lib/seo";
import { APP_CONFIG } from "@constants/config";
import { TITLE_TEMPLATES } from "@constants/seo";

export default function ToolsIndexPage() {
  const seo: PageSEO = useMemo(
    () => ({
      title: TITLE_TEMPLATES.tools,
      description:
        "Browse all 42 free online tools from AHADEX Tools. Image conversion, PDF editing, QR codes, text utilities, and more — all in your browser.",
      canonical: `${APP_CONFIG.url}/tools`,
      ogImage: "/images/og/home-og.jpg",
      ogType: "website",
      noIndex: false,
    }),
    []
  );

  return (
    <>
      <SEO seo={seo} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "All Tools", url: "/tools" },
        ]}
      />

      <section className="py-8 lg:py-12">
        <h1 className="font-display text-h1 font-bold text-white tracking-tight mb-3">
          All Tools
        </h1>
        <p className="text-base sm:text-lg text-dark-textSecondary max-w-3xl leading-relaxed">
          Every tool on AHADEX Tools — free, fast, and private. Pick any tool
          below and start working immediately. No accounts, no uploads.
        </p>
      </section>

      <ToolsGrid />
    </>
  );
}