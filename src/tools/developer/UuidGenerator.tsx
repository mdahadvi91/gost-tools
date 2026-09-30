import React from "react";

export const UuidGenerator: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="UuidGenerator" {...props}>
      <h1>UuidGenerator</h1>
      {children}
    </div>
  );
};
export default UuidGenerator;
