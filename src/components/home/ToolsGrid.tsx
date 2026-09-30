import React from "react";

export const ToolsGrid: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ToolsGrid" {...props}>
      {children || "ToolsGrid"}
    </div>
  );
};
export default ToolsGrid;
