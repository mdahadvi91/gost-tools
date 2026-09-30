import type { Category, CategoryId } from "@types/category";

export const categories: Category[] = [
  {
    id: "image",
    slug: "image",
    name: "Image Tools",
    description:
      "Convert, compress, resize, and edit images right in your browser. No uploads, no quality loss.",
    icon: "/images/icons/image-tools.svg",
    color: "#4DD9FF",
    count: 12,
  },
  {
    id: "pdf",
    slug: "pdf",
    name: "PDF Tools",
    description:
      "Merge, split, compress, and convert PDF files instantly. Everything runs locally on your device.",
    icon: "/images/icons/pdf-tools.svg",
    color: "#C084FC",
    count: 8,
  },
  {
    id: "qr",
    slug: "qr",
    name: "QR & Barcode",
    description:
      "Generate and scan QR codes for URLs, Wi-Fi, email, vCards, and more. Perfect for print or screen.",
    icon: "/images/icons/qr-tools.svg",
    color: "#8B5CF6",
    count: 8,
  },
  {
    id: "text",
    slug: "text",
    name: "Text Tools",
    description:
      "Count words, change case, format JSON, encode Base64, and clean up text — all offline.",
    icon: "/images/icons/text-tools.svg",
    color: "#5B9BFF",
    count: 6,
  },
  {
    id: "developer",
    slug: "developer",
    name: "Developer Tools",
    description:
      "URL encoding, UUID generation, regex testing — small utilities for everyday coding tasks.",
    icon: "/images/icons/dev-tools.svg",
    color: "#4DD9FF",
    count: 3,
  },
  {
    id: "calculators",
    slug: "calculators",
    name: "Calculators",
    description:
      "Percentage, age, date difference, units, BMI — everyday math made simple and accurate.",
    icon: "/images/icons/calculator-tools.svg",
    color: "#FFB84D",
    count: 5,
  },
];

/* ---------- Lookups ---------- */

export function getCategoryBySlug(slug: string): Category | undefined {
  return catyegories.find((c) => c.slug === slug);
}

export function getCategoryById(id: CategoryId): Category | undefined {
  return categories.find((c) => c.id === id);
}

/* ---------- Statistics ---------- */

export const totalToolCount = categories.reduce(
  (sum, cat) => sum + cat.count,
  0
); // 42