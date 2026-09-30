import React from "react";

export const WhyAhadex: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="WhyAhadex" {...props}>
      {children || "WhyAhadex"}
    </div>
  );
};
export default WhyAhadex;
