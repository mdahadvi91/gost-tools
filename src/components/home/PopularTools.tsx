import React from "react";

export const PopularTools: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="PopularTools" {...props}>
      {children || "PopularTools"}
    </div>
  );
};
export default PopularTools;
