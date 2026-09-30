import React from "react";

export const MergePdf: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="MergePdf" {...props}>
      <h1>MergePdf</h1>
      {children}
    </div>
  );
};
export default MergePdf;
