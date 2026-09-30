import React from "react";

export const PrivacyPage: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="PrivacyPage" {...props}>
      <h1>PrivacyPage</h1>
      {children}
    </div>
  );
};
export default PrivacyPage;
