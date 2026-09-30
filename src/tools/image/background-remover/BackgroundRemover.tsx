import React from "react";

export const BackgroundRemover: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="BackgroundRemover" {...props}>
      <h1>BackgroundRemover</h1>
      {children}
    </div>
  );
};
export default BackgroundRemover;
