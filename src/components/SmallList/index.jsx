import React from "react";
import styled from "styled-components";
import { H3 } from "../Headings";
const SmallListItemComponent = ({ className, title, href, ...rest }) => {
  return (
    <div className={className} href={href} {...rest}>
      <H3>{title}</H3>
    </div>
  );
};

const SmallListComponent = ({ className, children }) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        return child;
      })}
    </div>
  );
};

export const SmallListItem = styled(SmallListItemComponent)``;
export const SmallList = styled(SmallListComponent)``;
