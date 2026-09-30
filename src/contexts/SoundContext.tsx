
import React, { createContext, useContext, useState } from "react";
const SoundContext = createContext<{ soundEnabled: boolean; toggleSound: () => void }>({ soundEnabled: true, toggleSound: () => {} });
export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const toggleSound = () => setSoundEnabled(v => !v);
  return <SoundContext.Provider value={{ soundEnabled, toggleSound }}>{children}</SoundContext.Provider>;
};
export const useAppSound = () => useContext(SoundContext);
