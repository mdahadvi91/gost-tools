import React from "react";

export const SkipLink: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="SkipLink" {...props}>
      {children || "SkipLink"}
    </div>
  );
};
export default SkipLink;
