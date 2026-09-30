import React from "react";

export const Card: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="Card" {...props}>
      {children || "Card"}
    </div>
  );
};
export default Card;
