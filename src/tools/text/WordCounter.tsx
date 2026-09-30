import React from "react";

export const WordCounter: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="WordCounter" {...props}>
      <h1>WordCounter</h1>
      {children}
    </div>
  );
};
export default WordCounter;
