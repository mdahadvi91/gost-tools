import React from "react";

export const DownloadButton: React.FC<any> = ({ children, ...props }) => {
  return (
    <div data-component="DownloadButton" {...props}>
      {children || "DownloadButton"}
    </div>
  );
};
export default DownloadButton;
