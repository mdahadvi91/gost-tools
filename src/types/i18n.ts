
export type Language = "en" | "bn" | "ar";
export interface TranslationMap {
  [key: string]: string | TranslationMap;
}
