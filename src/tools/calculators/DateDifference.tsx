import React from "react";

export const DateDifference: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="DateDifference" {...props}>
      <h1>DateDifference</h1>
      {children}
    </div>
  );
};
export default DateDifference;
