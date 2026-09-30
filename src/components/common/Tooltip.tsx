import React from "react";

export const Tooltip: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="Tooltip" {...props}>
      {children || "Tooltip"}
    </div>
  );
};
export default Tooltip;
