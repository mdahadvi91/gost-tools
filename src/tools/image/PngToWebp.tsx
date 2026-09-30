import React from "react";

export const PngToWebp: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="PngToWebp" {...props}>
      <h1>PngToWebp</h1>
      {children}
    </div>
  );
};
export default PngToWebp;
