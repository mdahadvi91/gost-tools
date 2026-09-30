import React from "react";

export const VCardQrGenerator: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="VCardQrGenerator" {...props}>
      <h1>VCardQrGenerator</h1>
      {children}
    </div>
  );
};
export default VCardQrGenerator;
