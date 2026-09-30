import React from "react";

export const SoundController: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="SoundController" {...props}>
      {children || "SoundController"}
    </div>
  );
};
export default SoundController;
