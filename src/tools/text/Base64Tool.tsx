import React from "react";

export const Base64Tool: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="Base64Tool" {...props}>
      <h1>Base64Tool</h1>
      {children}
    </div>
  );
};
export default Base64Tool;
