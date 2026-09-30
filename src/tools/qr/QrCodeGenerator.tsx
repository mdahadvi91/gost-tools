import React from "react";

export const QrCodeGenerator: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="QrCodeGenerator" {...props}>
      <h1>QrCodeGenerator</h1>
      {children}
    </div>
  );
};
export default QrCodeGenerator;
