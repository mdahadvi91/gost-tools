import React from "react";

export const Badge: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="Badge" {...props}>
      {children || "Badge"}
    </div>
  );
};
export default Badge;
