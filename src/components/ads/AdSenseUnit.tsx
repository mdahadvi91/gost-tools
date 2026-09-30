import React from "react";

export const AdSenseUnit: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="AdSenseUnit" {...props}>
      {children || "AdSenseUnit"}
    </div>
  );
};
export default AdSenseUnit;
