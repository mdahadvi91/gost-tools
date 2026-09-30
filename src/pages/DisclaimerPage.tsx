import React from "react";

export const DisclaimerPage: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="DisclaimerPage" {...props}>
      <h1>DisclaimerPage</h1>
      {children}
    </div>
  );
};
export default DisclaimerPage;
