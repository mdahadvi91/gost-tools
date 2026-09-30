import React from "react";

export const LanguageToggle: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="LanguageToggle" {...props}>
      {children || "LanguageToggle"}
    </div>
  );
};
export default LanguageToggle;
