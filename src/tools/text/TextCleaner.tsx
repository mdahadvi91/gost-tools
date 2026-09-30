import React from "react";

export const TextCleaner: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="TextCleaner" {...props}>
      <h1>TextCleaner</h1>
      {children}
    </div>
  );
};
export default TextCleaner;
