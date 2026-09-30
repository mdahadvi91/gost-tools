import React from "react";

export const HeroSearch: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="HeroSearch" {...props}>
      {children || "HeroSearch"}
    </div>
  );
};
export default HeroSearch;
