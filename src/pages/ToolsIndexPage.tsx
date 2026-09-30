import React from "react";

export const ToolsIndexPage: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ToolsIndexPage" {...props}>
      <h1>ToolsIndexPage</h1>
      {children}
    </div>
  );
};
export default ToolsIndexPage;
