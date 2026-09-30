import React from "react";

export const SearchBar: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="SearchBar" {...props}>
      {children || "SearchBar"}
    </div>
  );
};
export default SearchBar;
