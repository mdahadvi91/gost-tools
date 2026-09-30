import React from "react";

export const MobileMenu: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="MobileMenu" {...props}>
      {children || "MobileMenu"}
    </div>
  );
};
export default MobileMenu;
