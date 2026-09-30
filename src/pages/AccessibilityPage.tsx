import React from "react";

export const AccessibilityPage: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="AccessibilityPage" {...props}>
      <h1>AccessibilityPage</h1>
      {children}
    </div>
  );
};
export default AccessibilityPage;
