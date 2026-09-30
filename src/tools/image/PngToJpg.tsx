import React from "react";

export const PngToJpg: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="PngToJpg" {...props}>
      <h1>PngToJpg</h1>
      {children}
    </div>
  );
};
export default PngToJpg;
