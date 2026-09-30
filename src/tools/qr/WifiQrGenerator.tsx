import React from "react";

export const WifiQrGenerator: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="WifiQrGenerator" {...props}>
      <h1>WifiQrGenerator</h1>
      {children}
    </div>
  );
};
export default WifiQrGenerator;
