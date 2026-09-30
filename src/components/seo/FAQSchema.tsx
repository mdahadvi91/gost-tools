import React from "react";

export const FAQSchema: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="FAQSchema" {...props}>
      {children || "FAQSchema"}
    </div>
  );
};
export default FAQSchema;
