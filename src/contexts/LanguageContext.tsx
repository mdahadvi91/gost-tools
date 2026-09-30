
import React, { createContext, useContext, useState } from "react";
const LanguageContext = createContext<{ lang: string; setLang: (l: string) => void }>({ lang: "en", setLang: () => {} });
export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState("en");
  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
};
export const useAppLanguage = () => useContext(LanguageContext);
