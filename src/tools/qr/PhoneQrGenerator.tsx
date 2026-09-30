import React from "react";

export const PhoneQrGenerator: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="PhoneQrGenerator" {...props}>
      <h1>PhoneQrGenerator</h1>
      {children}
    </div>
  );
};
export default PhoneQrGenerator;
