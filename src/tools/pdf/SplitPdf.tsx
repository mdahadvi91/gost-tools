import React from "react";

export const SplitPdf: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="SplitPdf" {...props}>
      <h1>SplitPdf</h1>
      {children}
    </div>
  );
};
export default SplitPdf;
