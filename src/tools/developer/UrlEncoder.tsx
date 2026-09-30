import React from "react";

export const UrlEncoder: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="UrlEncoder" {...props}>
      <h1>UrlEncoder</h1>
      {children}
    </div>
  );
};
export default UrlEncoder;
