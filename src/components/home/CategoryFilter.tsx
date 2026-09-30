import React from "react";

export const CategoryFilter: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="CategoryFilter" {...props}>
      {children || "CategoryFilter"}
    </div>
  );
};
export default CategoryFilter;
