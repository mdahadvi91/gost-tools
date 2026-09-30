import React from "react";

export const NotFoundPage: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="NotFoundPage" {...props}>
      <h1>NotFoundPage</h1>
      {children}
    </div>
  );
};
export default NotFoundPage;
