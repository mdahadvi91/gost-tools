import React from "react";

export const ScrollProgress: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ScrollProgress" {...props}>
      {children || "ScrollProgress"}
    </div>
  );
};
export default ScrollProgress;
