import React from "react";

export const BarcodeGenerator: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="BarcodeGenerator" {...props}>
      <h1>BarcodeGenerator</h1>
      {children}
    </div>
  );
};
export default BarcodeGenerator;
