import React from "react";

export const HomeFAQ: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="HomeFAQ" {...props}>
      {children || "HomeFAQ"}
    </div>
  );
};
export default HomeFAQ;
