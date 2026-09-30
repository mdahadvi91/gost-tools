import React from "react";

export const PageTransition: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="PageTransition" {...props}>
      {children || "PageTransition"}
    </div>
  );
};
export default PageTransition;
