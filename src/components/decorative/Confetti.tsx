import React from "react";

export const Confetti: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="Confetti" {...props}>
      {children || "Confetti"}
    </div>
  );
};
export default Confetti;
