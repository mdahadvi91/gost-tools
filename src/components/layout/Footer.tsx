import React from "react";

export const Footer: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="Footer" {...props}>
      {children || "Footer"}
    </div>
  );
};
export default Footer;
