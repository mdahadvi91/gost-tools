import React from "react";

export const PdfToJpg: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="PdfToJpg" {...props}>
      <h1>PdfToJpg</h1>
      {children}
    </div>
  );
};
export default PdfToJpg;
