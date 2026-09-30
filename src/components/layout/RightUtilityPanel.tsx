import React from "react";

export const RightUtilityPanel: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="RightUtilityPanel" {...props}>
      {children || "RightUtilityPanel"}
    </div>
  );
};
export default RightUtilityPanel;
