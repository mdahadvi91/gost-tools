import React from "react";

export const ToolCard: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ToolCard" {...props}>
      {children || "ToolCard"}
    </div>
  );
};
export default ToolCard;
