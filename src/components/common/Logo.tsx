import React from "react";

export const Logo: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="Logo" {...props}>
      {children || "Logo"}
    </div>
  );
};
export default Logo;
