import React from "react";

export const PageLoader: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="PageLoader" {...props}>
      {children || "PageLoader"}
    </div>
  );
};
export default PageLoader;
