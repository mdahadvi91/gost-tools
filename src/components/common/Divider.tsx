import React from "react";

export const Divider: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="Divider" {...props}>
      {children || "Divider"}
    </div>
  );
};
export default Divider;
