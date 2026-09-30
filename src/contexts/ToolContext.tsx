
import React, { createContext, useContext, useState } from "react";
const ToolContext = createContext<{ activeTool: string | null; setActiveTool: (id: string | null) => void }>({ activeTool: null, setActiveTool: () => {} });
export const ToolProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  return <ToolContext.Provider value={{ activeTool, setActiveTool }}>{children}</ToolContext.Provider>;
};
export const useActiveTool = () => useContext(ToolContext);
