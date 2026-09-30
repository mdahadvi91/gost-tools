import React from "react";

export const HeartbeatHeart: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="HeartbeatHeart" {...props}>
      {children || "HeartbeatHeart"}
    </div>
  );
};
export default HeartbeatHeart;
