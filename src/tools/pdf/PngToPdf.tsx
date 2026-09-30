import React from "react";

export const PngToPdf: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="PngToPdf" {...props}>
      <h1>PngToPdf</h1>
      {children}
    </div>
  );
};
export default PngToPdf;
