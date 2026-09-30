import React from "react";

export const AdContainer: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="AdContainer" {...props}>
      {children || "AdContainer"}
    </div>
  );
};
export default AdContainer;
