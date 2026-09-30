import React from "react";

export const JpgToPng: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="JpgToPng" {...props}>
      <h1>JpgToPng</h1>
      {children}
    </div>
  );
};
export default JpgToPng;
