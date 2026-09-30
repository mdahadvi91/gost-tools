import { APP_CONFIG } from "./config";

/* Default SEO values */
export const SEO_DEFAULTS = {
  titleSuffix: ` | ${APP_CONFIG.name}`,
  titleTemplate: (title: string) => `${title}${SEO_DEFAULTS.titleSuffix}`,
  description:
    "Free, fast and private online tools. Convert images, merge PDFs, generate QR codes, and more — all in your browser.",
  ogImage: "/images/og/default-og.jpg",
  ogType: "website" as const,
  twitterCard: "summary_large_image" as const,
  locale: "en_US",
  localeAlternates: ["bn_BD", "ar_AR"],
} as const;

/* Title templates for different page types */
export const TITLE_TEMPLATES = {
  home: `${APP_CONFIG.name} — 42 Free, Fast & Private Online Tools`,
  tools: `All Tools — 42 Free Online Utilities${SEO_DEFAULTS.titleSuffix}`,
  category: (name: string) => `${name} — Free Online${SEO_DEFAULTS.titleSuffix}`,
  tool: (name: string, description: string) =>
    `${name} — ${description}${SEO_DEFAULTS.titleSuffix}`,
  about: `About — One developer, one big dream${SEO_DEFAULTS.titleSuffix}`,
  contact: `Contact Us${SEO_DEFAULTS.titleSuffix}`,
  privacy: `Privacy Policy${SEO_DEFAULTS.titleSuffix}`,
  terms: `Terms of Service${SEO_DEFAULTS.titleSuffix}`,
  disclaimer: `Disclaimer${SEO_DEFAULTS.titleSuffix}`,
  accessibility: `Accessibility Statement${SEO_DEFAULTS.titleSuffix}`,
  cookiePolicy: `Cookie Policy${SEO_DEFAULTS.titleSuffix}`,
  notFound: `Page Not Found${SEO_DEFAULTS.titleSuffix}`,
} as const;

/* Sitemap priorities */
export const SITEMAP_PRIORITY = {
  home: 1.0,
  tools: 0.9,
  category: 0.8,
  tool: 0.7,
  trustPage: 0.5,
  about: 0.6,
  contact: 0.6,
} as const;

/* Structured data helpers */
export const SCHEMA_CONTEXT = "https://schema.org";
export const ORG_ID = `${APP_CONFIG.url}/#organization`;
export const WEBSITE_ID = `${APP_CONFIG.url}/#website`;

/* Meta robots */
export const ROBOTS_DEFAULT = "index, follow, max-image-preview:large";
export const ROBOTS_NOINDEX = "noindex, nofollow";