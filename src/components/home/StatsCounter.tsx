import React from "react";

export const StatsCounter: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="StatsCounter" {...props}>
      {children || "StatsCounter"}
    </div>
  );
};
export default StatsCounter;
