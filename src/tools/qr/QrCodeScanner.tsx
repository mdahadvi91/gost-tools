import React from "react";

export const QrCodeScanner: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="QrCodeScanner" {...props}>
      <h1>QrCodeScanner</h1>
      {children}
    </div>
  );
};
export default QrCodeScanner;
