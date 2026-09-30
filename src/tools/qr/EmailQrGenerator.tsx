import React from "react";

export const EmailQrGenerator: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="EmailQrGenerator" {...props}>
      <h1>EmailQrGenerator</h1>
      {children}
    </div>
  );
};
export default EmailQrGenerator;
