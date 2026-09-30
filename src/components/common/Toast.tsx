import React from "react";

export const Toast: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="Toast" {...props}>
      {children || "Toast"}
    </div>
  );
};
export default Toast;
