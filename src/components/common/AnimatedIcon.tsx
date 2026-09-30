import React from "react";

export const AnimatedIcon: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="AnimatedIcon" {...props}>
      {children || "AnimatedIcon"}
    </div>
  );
};
export default AnimatedIcon;
