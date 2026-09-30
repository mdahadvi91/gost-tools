import React from "react";

export const ToolControlPanel: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ToolControlPanel" {...props}>
      {children || "ToolControlPanel"}
    </div>
  );
};
export default ToolControlPanel;
