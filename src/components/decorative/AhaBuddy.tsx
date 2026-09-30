import React from "react";

export const AhaBuddy: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="AhaBuddy" {...props}>
      {children || "AhaBuddy"}
    </div>
  );
};
export default AhaBuddy;
