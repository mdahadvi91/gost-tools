import React from "react";

export const HeroSection: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="HeroSection" {...props}>
      {children || "HeroSection"}
    </div>
  );
};
export default HeroSection;
