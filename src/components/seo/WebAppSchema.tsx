import { StructuredData } from "./StructuredData";
import { APP_CONFIG } from "@constants/config";

interface WebAppSchemaProps {
  name: string;
  description: string;
  url: string;
  category?: string;
  ratingValue?: number;
  ratingCount?: number;
}

const CATEGORY_MAP: Record<string, string> = {
  image: "MultimediaApplication",
  pdf: "BusinessApplication",
  qr: "UtilitiesApplication",
  text: "UtilitiesApplication",
  developer: "DeveloperApplication",
  calculators: "UtilitiesApplication",
};

export function WebAppSchema({
  name,
  description,
  url,
  category = "utilities",
  ratingValue,
  ratingCount,
}: WebAppSchemaProps) {
  const absoluteUrl = url.startsWith("http")
    ? url
    : `${APP_CONFIG.url}${url}`;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: absoluteUrl,
    applicationCategory: CATEGORY_MAP[category] ?? "UtilitiesApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    inLanguage: ["en", "bn", "ar"],
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: {
      "@type": "Organization",
      name: APP_CONFIG.name,
      url: APP_CONFIG.url,
    },
  };

  /* Only include aggregateRating if real ratings exist (never invent them) */
  if (ratingValue !== undefined && ratingCount !== undefined && ratingCount > 0) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue,
      ratingCount,
    };
  }

  return <StructuredData id="ahadex-webapp-schema" data={data} />;
}