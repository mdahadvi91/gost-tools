import React from "react";

export const CategoryPage: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="CategoryPage" {...props}>
      <h1>CategoryPage</h1>
      {children}
    </div>
  );
};
export default CategoryPage;
