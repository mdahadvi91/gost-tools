import React from "react";

export const ToolSEOContent: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ToolSEOContent" {...props}>
      {children || "ToolSEOContent"}
    </div>
  );
};
export default ToolSEOContent;
