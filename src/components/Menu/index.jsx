import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { H3 } from "../Headings";

const MenuItemComponent = ({ className, title, icon, path, ...rest }) => {
  return (
    <NavLink className={className} to={path} {...rest}>
      {icon}
      <H3>{title}</H3>
    </NavLink>
  );
};

const MenuComponent = ({ className, children }) => {
  return (
    <nav className={className}>
      {/* {React.Children.map(children, (child, index) => {
        console.log(child, index);
        return child; */}

      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child);
        }
        return child;
      })}
    </nav>
  );
};

export const Menu = styled(MenuComponent)`
  :not(:last-child) {
    margin-bottom: 2.4rem;
  }
`;

export const MenuItem = styled(MenuItemComponent)`
  max-width: 18.8rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  &.active {
    background-color: ${(props) => props.theme.light500};
    h3 {
      color: ${(props) => props.theme.textDark800};
    }
    svg {
      stroke: ${(props) => props.theme.textDark800};
    }
  }

  :hover {
    cursor: pointer;
  }
  :not(:last-child) {
    margin-bottom: 2rem;
  }
  h3 {
    color: ${(props) => props.theme.textDark300};
  }
  svg {
    margin-right: 1.2rem;
    stroke: ${(props) => props.theme.textDark300};
  }
`;
