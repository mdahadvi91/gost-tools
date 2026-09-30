import React from "react";

export const ToolHeader: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ToolHeader" {...props}>
      {children || "ToolHeader"}
    </div>
  );
};
export default ToolHeader;
