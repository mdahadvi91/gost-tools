import React from "react";

export const BmiCalculator: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="BmiCalculator" {...props}>
      <h1>BmiCalculator</h1>
      {children}
    </div>
  );
};
export default BmiCalculator;
