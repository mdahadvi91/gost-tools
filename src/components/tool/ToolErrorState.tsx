import React from "react";

export const ToolErrorState: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ToolErrorState" {...props}>
      {children || "ToolErrorState"}
    </div>
  );
};
export default ToolErrorState;
