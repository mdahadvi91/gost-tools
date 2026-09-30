
import React, { createContext, useContext } from "react";
const ToastContext = createContext<{ toast: (msg: string) => void }>({ toast: () => {} });
export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const toast = (msg: string) => console.log(msg);
  return <ToastContext.Provider value={{ toast }}>{children}</ToastContext.Provider>;
};
export const useToast = () => useContext(ToastContext);
