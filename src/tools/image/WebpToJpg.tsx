import React from "react";

export const WebpToJpg: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="WebpToJpg" {...props}>
      <h1>WebpToJpg</h1>
      {children}
    </div>
  );
};
export default WebpToJpg;
