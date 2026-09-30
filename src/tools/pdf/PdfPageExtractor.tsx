import React from "react";

export const PdfPageExtractor: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="PdfPageExtractor" {...props}>
      <h1>PdfPageExtractor</h1>
      {children}
    </div>
  );
};
export default PdfPageExtractor;
