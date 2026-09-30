import React from "react";

export const AgeCalculator: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="AgeCalculator" {...props}>
      <h1>AgeCalculator</h1>
      {children}
    </div>
  );
};
export default AgeCalculator;
