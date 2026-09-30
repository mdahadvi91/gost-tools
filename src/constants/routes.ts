export const ROUTES = {
  home: "/",
  tools: "/tools",
  categories: "/categories",
  category: (slug: string) => `/categories/${slug}`,
  tool: (slug: string) => `/tools/${slug}`,

  about: "/about",
  contact: "/contact",

  privacy: "/privacy",
  terms: "/terms",
  disclaimer: "/disclaimer",
  accessibility: "/accessibility",
  cookiePolicy: "/cookie-policy",

  notFound: "/404",
} as const;

export const TOOL_ROUTES = {
  jpgToPng: "/tools/jpg-to-png",
  pngToJpg: "/tools/png-to-jpg",
  imageCompressor: "/tools/image-compressor",
  imageResizer: "/tools/image-resizer",
  mergePdf: "/tools/merge-pdf",
  splitPdf: "/tools/split-pdf",
  compressPdf: "/tools/compress-pdf",
  qrCodeGenerator: "/tools/qr-code-generator",
  wordCounter: "/tools/word-counter",
  jsonFormatter: "/tools/json-formatter",
  percentageCalculator: "/tools/percentage-calculator",
} as const;

export const CATEGORY_ROUTES = {
  image: "/categories/image",
  pdf: "/categories/pdf",
  qr: "/categories/qr",
  text: "/categories/text",
  developer: "/categories/developer",
  calculators: "/categories/calculators",
} as const;