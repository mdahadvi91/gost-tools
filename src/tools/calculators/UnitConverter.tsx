import React from "react";

export const UnitConverter: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="UnitConverter" {...props}>
      <h1>UnitConverter</h1>
      {children}
    </div>
  );
};
export default UnitConverter;
