import React from "react";

export const BreadcrumbSchema: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="BreadcrumbSchema" {...props}>
      {children || "BreadcrumbSchema"}
    </div>
  );
};
export default BreadcrumbSchema;
