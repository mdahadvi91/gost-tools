import React from "react";

export const MainLayout: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="MainLayout" {...props}>
      {children || "MainLayout"}
    </div>
  );
};
export default MainLayout;
