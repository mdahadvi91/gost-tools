import React from "react";

export const ImageCompressor: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ImageCompressor" {...props}>
      <h1>ImageCompressor</h1>
      {children}
    </div>
  );
};
export default ImageCompressor;
