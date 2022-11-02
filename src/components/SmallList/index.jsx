import React from "react";
import styled from "styled-components";
import { H3 } from "../Headings";
const SmallListItemComponent = ({ className, title, href, ...rest }) => {
  return (
    <li className={className} href={href} {...rest}>
      <H3>{title}</H3>
    </li>
  );
};

const SmallListComponent = ({ className, children }) => {
  return (
    <ul className={className}>
      {React.Children.map(children, (child) => {
        return child;
      })}
    </ul>
  );
};

export const SmallListItem = styled(SmallListItemComponent)`
  padding: 1.5rem 2rem;
  background-color: ${(props) => props.theme.white};
  font-family: "Plus Jakarta Sans", sans-serif;
  border-radius: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.blue200};
  }
`;
export const SmallList = styled(SmallListComponent)`
  :hover {
    cursor: pointer;
  }

  background-color: ${(props) => props.theme.white};
  max-width: ${(props) => props.width || "15rem"};
  border: ${(props) => `1px solid ${props.theme.light900}`};
  border-top: none;
  border-radius: 1rem;
`;
