import React from "react";

export const ShaderBackground: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ShaderBackground" {...props}>
      {children || "ShaderBackground"}
    </div>
  );
};
export default ShaderBackground;
