import React from "react";

export const ToolFAQ: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ToolFAQ" {...props}>
      {children || "ToolFAQ"}
    </div>
  );
};
export default ToolFAQ;
