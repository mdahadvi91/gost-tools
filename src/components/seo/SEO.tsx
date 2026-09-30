import { useEffect } from "react";
import {
  applySEOToDocument,
  type PageSEO,
} from "@lib/seo";

interface SEOProps {
  /** Full SEO object — use builders from @lib/seo */
  seo: PageSEO;
  /** Optional JSON-LD schema objects to inject */
  schemas?: Record<string, unknown>[];
}

const SCHEMA_SCRIPT_ID = "ahadex-page-schema";

/**
 * Applies SEO metadata to document head.
 * Also injects JSON-LD structured data if `schemas` provided.
 */
export function SEO({ seo, schemas }: SEOProps) {
  useEffect(() => {
    applySEOToDocument(seo);
  }, [seo]);

  useEffect(() => {
    if (!schemas || schemas.length === 0) return;
    if (typeof document === "undefined") return;

    // Remove any existing page schema
    const existing = document.getElementById(SCHEMA_SCRIPT_ID);
    if (existing) existing.remove();

    // Inject new
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = SCHEMA_SCRIPT_ID;
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": schemas,
    });
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(SCHEMA_SCRIPT_ID);
      if (el) el.remove();
    };
  }, [schemas]);

  return null;
}