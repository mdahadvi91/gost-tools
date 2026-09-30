import React from "react";

export const RelatedTools: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="RelatedTools" {...props}>
      {children || "RelatedTools"}
    </div>
  );
};
export default RelatedTools;
