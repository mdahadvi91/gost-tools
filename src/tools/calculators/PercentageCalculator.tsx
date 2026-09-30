import React from "react";

export const PercentageCalculator: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="PercentageCalculator" {...props}>
      <h1>PercentageCalculator</h1>
      {children}
    </div>
  );
};
export default PercentageCalculator;
