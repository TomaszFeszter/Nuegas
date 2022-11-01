import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { H3 } from "../Headings";

const MenuItemComponent = ({ className, title, icon, href, ...rest }) => {
  console.log(rest);
  return (
    <div className={className} href={href} {...rest}>
      {icon}
      <H3>{title}</H3>
    </div>
  );
};

const MenuComponent = ({ className, children }) => {
  const [active, setActive] = useState(0);

  return (
    <div className={className}>
      {/* {React.Children.map(children, (child, index) => {
        console.log(child, index);
        return child; */}

      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            active: index === active,
            onClick: () => {
              setActive(index);
            },
          });
        }
        return child;
      })}
    </div>
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
  background-color: ${(props) => props.active && props.theme.light500};

  :hover {
    cursor: pointer;
  }
  :not(:last-child) {
    margin-bottom: 2rem;
  }
  h3 {
    color: ${(props) =>
      props.active ? props.theme.textDark800 : props.theme.textDark300};
  }
  svg {
    margin-right: 1.2rem;
    stroke: ${(props) =>
      props.active ? props.theme.textDark800 : props.theme.textDark300};
  }
`;
