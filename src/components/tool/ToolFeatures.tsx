import React from "react";

export const ToolFeatures: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ToolFeatures" {...props}>
      {children || "ToolFeatures"}
    </div>
  );
};
export default ToolFeatures;
