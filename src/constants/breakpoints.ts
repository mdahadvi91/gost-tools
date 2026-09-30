export const BREAKPOINTS = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const MEDIA_QUERIES = {
  xs: `(min-width: ${BREAKPOINTS.xs}px)`,
  sm: `(min-width: ${BREAKPOINTS.sm}px)`,
  md: `(min-width: ${BREAKPOINTS.md}px)`,
  lg: `(min-width: ${BREAKPOINTS.lg}px)`,
  xl: `(min-width: ${BREAKPOINTS.xl}px)`,
  "2xl": `(min-width: ${BREAKPOINTS["2xl"]}px)`,
  isMobile: `(max-width: ${BREAKPOINTS.lg - 1}px)`,
  isDesktop: `(min-width: ${BREAKPOINTS.lg}px)`,
  prefersReducedMotion: "(prefers-reduced-motion: reduce)",
  prefersDarkMode: "(prefers-color-scheme: dark)",
} as const;

export const LAYOUT = {
  headerHeight: 72,
  headerHeightMobile: 64,
  sidebarWidth: 256,
  controlPanelWidth: 340,
  maxContentWidth: 1400,
} as const;