import React from "react";

export const Wrapper = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};
