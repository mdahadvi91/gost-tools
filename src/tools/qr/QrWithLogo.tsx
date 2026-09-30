import React from "react";

export const QrWithLogo: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="QrWithLogo" {...props}>
      <h1>QrWithLogo</h1>
      {children}
    </div>
  );
};
export default QrWithLogo;
