import React from "react";

export const PrivacyPromise: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="PrivacyPromise" {...props}>
      {children || "PrivacyPromise"}
    </div>
  );
};
export default PrivacyPromise;
