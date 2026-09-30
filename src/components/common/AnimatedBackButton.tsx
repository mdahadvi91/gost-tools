import React from "react";

export const AnimatedBackButton: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="AnimatedBackButton" {...props}>
      {children || "AnimatedBackButton"}
    </div>
  );
};
export default AnimatedBackButton;
