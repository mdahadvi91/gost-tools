import React from "react";

export const StructuredData: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="StructuredData" {...props}>
      {children || "StructuredData"}
    </div>
  );
};
export default StructuredData;
