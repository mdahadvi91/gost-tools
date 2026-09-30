import React from "react";

export const Modal: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="Modal" {...props}>
      {children || "Modal"}
    </div>
  );
};
export default Modal;
