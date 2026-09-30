import React from "react";

export const ToolPrivacyNote: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ToolPrivacyNote" {...props}>
      {children || "ToolPrivacyNote"}
    </div>
  );
};
export default ToolPrivacyNote;
