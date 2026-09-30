import React from "react";

export const ErrorBoundary: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ErrorBoundary" {...props}>
      {children || "ErrorBoundary"}
    </div>
  );
};
export default ErrorBoundary;
