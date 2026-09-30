import React from "react";

export const Breadcrumb: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="Breadcrumb" {...props}>
      {children || "Breadcrumb"}
    </div>
  );
};
export default Breadcrumb;
