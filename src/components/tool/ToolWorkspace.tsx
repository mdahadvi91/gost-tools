import React from "react";

export const ToolWorkspace: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ToolWorkspace" {...props}>
      {children || "ToolWorkspace"}
    </div>
  );
};
export default ToolWorkspace;
