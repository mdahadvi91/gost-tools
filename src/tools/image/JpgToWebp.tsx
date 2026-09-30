import React from "react";

export const JpgToWebp: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="JpgToWebp" {...props}>
      <h1>JpgToWebp</h1>
      {children}
    </div>
  );
};
export default JpgToWebp;
