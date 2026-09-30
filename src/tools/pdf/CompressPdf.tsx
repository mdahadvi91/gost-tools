import React from "react";

export const CompressPdf: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="CompressPdf" {...props}>
      <h1>CompressPdf</h1>
      {children}
    </div>
  );
};
export default CompressPdf;
