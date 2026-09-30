import React from "react";

export const SEO: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="SEO" {...props}>
      {children || "SEO"}
    </div>
  );
};
export default SEO;
