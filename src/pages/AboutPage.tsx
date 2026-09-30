import React from "react";

export const AboutPage: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="AboutPage" {...props}>
      <h1>AboutPage</h1>
      {children}
    </div>
  );
};
export default AboutPage;
