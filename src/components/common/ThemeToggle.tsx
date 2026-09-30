import React from "react";

export const ThemeToggle: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ThemeToggle" {...props}>
      {children || "ThemeToggle"}
    </div>
  );
};
export default ThemeToggle;
