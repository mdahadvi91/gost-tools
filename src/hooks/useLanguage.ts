
import { useState } from "react";
export function useLanguage() {
  const [lang, setLang] = useState<"en" | "bn" | "ar">("en");
  return { lang, setLang };
}
