import React from "react";

export const PdfToPng: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="PdfToPng" {...props}>
      <h1>PdfToPng</h1>
      {children}
    </div>
  );
};
export default PdfToPng;
