import React from "react";

export const CookiePolicyPage: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="CookiePolicyPage" {...props}>
      <h1>CookiePolicyPage</h1>
      {children}
    </div>
  );
};
export default CookiePolicyPage;
