import React from "react";

export const LoadingSpinner: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="LoadingSpinner" {...props}>
      {children || "LoadingSpinner"}
    </div>
  );
};
export default LoadingSpinner;
