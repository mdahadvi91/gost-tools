import React from "react";

export const ShareCard: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ShareCard" {...props}>
      {children || "ShareCard"}
    </div>
  );
};
export default ShareCard;
