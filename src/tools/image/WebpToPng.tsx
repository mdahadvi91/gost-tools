import React from "react";

export const WebpToPng: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="WebpToPng" {...props}>
      <h1>WebpToPng</h1>
      {children}
    </div>
  );
};
export default WebpToPng;
