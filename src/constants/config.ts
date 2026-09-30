export const APP_CONFIG = {
  name: "AHADEX Tools",
  shortName: "AHADEX",
  description:
    "42 free, fast and private online tools for everyday digital tasks.",
  version: "1.0.0",
  domain: "ahadex.fun",
  url: "https://ahadex.fun",
  email: "mdahadvi91@gmail.com",
  github: "https://github.com/mdahadvi91/gost-tools",
  githubOwner: "mdahadvi91",
  githubRepo: "gost-tools",
} as const;

export const STORAGE_KEYS = {
  theme: "ahadex-theme",
  language: "ahadex-language",
  sound: "ahadex-sound",
  buddyDismissed: "ahadex-buddy-dismissed",
  cookieConsent: "ahadex-cookie-consent",
  recentlyUsed: "ahadex-recently-used",
} as const;

export const DEFAULT_THEME = "system" as const;
export const DEFAULT_LANGUAGE = "en" as const;

export const FEATURE_FLAGS = {
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === "true",
  enableAdSense: import.meta.env.VITE_ENABLE_ADSENSE === "true",
  enableSound: import.meta.env.VITE_ENABLE_SOUND !== "false",
  enableAnimations: import.meta.env.VITE_ENABLE_ANIMATIONS !== "false",
  enableBackgroundRemover:
    import.meta.env.VITE_ENABLE_BACKGROUND_REMOVER === "true",
  debugMode: import.meta.env.VITE_DEBUG_MODE === "true",
} as const;