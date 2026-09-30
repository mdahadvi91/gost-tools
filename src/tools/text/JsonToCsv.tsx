import React from "react";

export const JsonToCsv: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="JsonToCsv" {...props}>
      <h1>JsonToCsv</h1>
      {children}
    </div>
  );
};
export default JsonToCsv;
