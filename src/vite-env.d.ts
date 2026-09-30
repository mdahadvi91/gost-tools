/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string;
  readonly VITE_SITE_NAME: string;
  readonly VITE_SITE_EMAIL: string;
  readonly VITE_SITE_DESCRIPTION: string;
  readonly VITE_SITE_GITHUB: string;

  readonly VITE_GA_MEASUREMENT_ID: string;

  readonly VITE_ADSENSE_CLIENT_ID: string;
  readonly VITE_ADSENSE_SLOT_HEADER: string;
  readonly VITE_ADSENSE_SLOT_IN_ARTICLE: string;
  readonly VITE_ADSENSE_SLOT_FOOTER: string;

  readonly VITE_CONTACT_FORM_ENDPOINT: string;
  readonly VITE_TURNSTILE_SITE_KEY: string;

  readonly VITE_ENABLE_ANALYTICS: string;
  readonly VITE_ENABLE_ADSENSE: string;
  readonly VITE_ENABLE_SOUND: string;
  readonly VITE_ENABLE_ANIMATIONS: string;
  readonly VITE_ENABLE_BACKGROUND_REMOVER: string;

  readonly VITE_DEBUG_MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const __APP_VERSION__: string;
declare const __APP_NAME__: string;
declare const __BUILD_TIME__: string;