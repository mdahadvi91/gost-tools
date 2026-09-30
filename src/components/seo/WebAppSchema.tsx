import React from "react";

export const WebAppSchema: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="WebAppSchema" {...props}>
      {children || "WebAppSchema"}
    </div>
  );
};
export default WebAppSchema;
