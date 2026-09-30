import React from "react";

export const ToolPage: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ToolPage" {...props}>
      {children || "ToolPage"}
    </div>
  );
};
export default ToolPage;
