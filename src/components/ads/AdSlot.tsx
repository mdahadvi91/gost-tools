import React from "react";

export const AdSlot: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="AdSlot" {...props}>
      {children || "AdSlot"}
    </div>
  );
};
export default AdSlot;
