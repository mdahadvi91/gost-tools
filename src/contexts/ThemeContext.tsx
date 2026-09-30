
import React, { createContext, useContext, useState } from "react";
const ThemeContext = createContext<{ theme: string; toggleTheme: () => void }>({ theme: "light", toggleTheme: () => {} });
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(t => t === "light" ? "dark" : "light");
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
export const useAppTheme = () => useContext(ThemeContext);
