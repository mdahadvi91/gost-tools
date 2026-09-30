import React from "react";

export const Button: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="Button" {...props}>
      {children || "Button"}
    </div>
  );
};
export default Button;
