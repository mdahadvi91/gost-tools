import React from "react";

export const ToolFrame: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ToolFrame" {...props}>
      {children || "ToolFrame"}
    </div>
  );
};
export default ToolFrame;
