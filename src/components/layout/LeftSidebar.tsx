import React from "react";

export const LeftSidebar: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="LeftSidebar" {...props}>
      {children || "LeftSidebar"}
    </div>
  );
};
export default LeftSidebar;
