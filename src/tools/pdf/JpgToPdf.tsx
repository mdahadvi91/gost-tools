import React from "react";

export const JpgToPdf: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="JpgToPdf" {...props}>
      <h1>JpgToPdf</h1>
      {children}
    </div>
  );
};
export default JpgToPdf;
