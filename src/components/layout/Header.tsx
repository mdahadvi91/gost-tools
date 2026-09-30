import React from "react";

export const Header: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="Header" {...props}>
      {children || "Header"}
    </div>
  );
};
export default Header;
