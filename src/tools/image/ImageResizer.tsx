import React from "react";

export const ImageResizer: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ImageResizer" {...props}>
      <h1>ImageResizer</h1>
      {children}
    </div>
  );
};
export default ImageResizer;
