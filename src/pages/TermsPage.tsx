import React from "react";

export const TermsPage: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="TermsPage" {...props}>
      <h1>TermsPage</h1>
      {children}
    </div>
  );
};
export default TermsPage;
