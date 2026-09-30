import React from "react";

export const ToolHowTo: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ToolHowTo" {...props}>
      {children || "ToolHowTo"}
    </div>
  );
};
export default ToolHowTo;
