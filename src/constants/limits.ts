/* File size limits (in bytes) */
export const FILE_SIZE = {
  image: 50 * 1024 * 1024, // 50 MB
  pdf: 100 * 1024 * 1024, // 100 MB
  video: 500 * 1024 * 1024, // 500 MB (future)
  text: 5 * 1024 * 1024, // 5 MB
} as const;

/* Batch processing limits */
export const BATCH_LIMITS = {
  images: 50,
  pdfs: 20,
  textItems: 100,
} as const;

/* Tool-specific limits */
export const TOOL_LIMITS = {
  qrCodeMaxLength: 2953, // Max QR capacity for byte mode
  wordCounterMaxChars: 1_000_000, // 1M chars
  jsonMaxSize: 10 * 1024 * 1024, // 10 MB
  uuidBulkMax: 1000,
  regexMaxLength: 1000,
} as const;

/* UI limits */
export const UI_LIMITS = {
  searchResultsMax: 8,
  relatedToolsMax: 6,
  popularToolsMax: 6,
  recentToolsMax: 5,
  toastDurationMs: 4000,
  tooltipDelayMs: 300,
  pageTransitionMs: 450,
} as const;

/* Image dimension limits */
export const IMAGE_LIMITS = {
  maxWidth: 10000,
  maxHeight: 10000,
  maxPixels: 40_000_000, // 40 megapixels
  thumbnailSize: 200,
} as const;