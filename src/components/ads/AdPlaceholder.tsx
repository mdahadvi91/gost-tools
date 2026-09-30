import React from "react";

export const AdPlaceholder: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="AdPlaceholder" {...props}>
      {children || "AdPlaceholder"}
    </div>
  );
};
export default AdPlaceholder;
