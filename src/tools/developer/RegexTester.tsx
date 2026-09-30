import React from "react";

export const RegexTester: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="RegexTester" {...props}>
      <h1>RegexTester</h1>
      {children}
    </div>
  );
};
export default RegexTester;
