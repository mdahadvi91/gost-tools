import React from "react";

export const ImageCropper: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ImageCropper" {...props}>
      <h1>ImageCropper</h1>
      {children}
    </div>
  );
};
export default ImageCropper;
