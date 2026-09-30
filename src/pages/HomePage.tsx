import React from "react";

export const HomePage: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="HomePage" {...props}>
      <h1>HomePage</h1>
      {children}
    </div>
  );
};
export default HomePage;
