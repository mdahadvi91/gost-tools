import React from "react";

export const EmptySearchState: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="EmptySearchState" {...props}>
      {children || "EmptySearchState"}
    </div>
  );
};
export default EmptySearchState;
