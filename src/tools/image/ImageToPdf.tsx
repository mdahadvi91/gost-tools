import React from "react";

export const ImageToPdf: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ImageToPdf" {...props}>
      <h1>ImageToPdf</h1>
      {children}
    </div>
  );
};
export default ImageToPdf;
