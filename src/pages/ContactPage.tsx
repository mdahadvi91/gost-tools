import React from "react";

export const ContactPage: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="ContactPage" {...props}>
      <h1>ContactPage</h1>
      {children}
    </div>
  );
};
export default ContactPage;
