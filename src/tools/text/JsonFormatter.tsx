import React from "react";

export const JsonFormatter: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="JsonFormatter" {...props}>
      <h1>JsonFormatter</h1>
      {children}
    </div>
  );
};
export default JsonFormatter;
