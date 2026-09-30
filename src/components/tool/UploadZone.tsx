import React from "react";

export const UploadZone: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="UploadZone" {...props}>
      {children || "UploadZone"}
    </div>
  );
};
export default UploadZone;
