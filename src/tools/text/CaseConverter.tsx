import React from "react";

export const CaseConverter: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="CaseConverter" {...props}>
      <h1>CaseConverter</h1>
      {children}
    </div>
  );
};
export default CaseConverter;
