import React from "react";

export const HowItWorks: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="HowItWorks" {...props}>
      {children || "HowItWorks"}
    </div>
  );
};
export default HowItWorks;
