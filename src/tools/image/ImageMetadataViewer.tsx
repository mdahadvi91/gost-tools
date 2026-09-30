import React from "react";

export const ImageMetadataViewer: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ImageMetadataViewer" {...props}>
      <h1>ImageMetadataViewer</h1>
      {children}
    </div>
  );
};
export default ImageMetadataViewer;
