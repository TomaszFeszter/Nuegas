import React, { useState } from "react";
import styled from "styled-components";

const DropdownOpenComponent = ({ className, children, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          onClick: () => {
            if (child.props.onClick) child.props.onClick();
          },
        });
      })}
    </div>
  );
};

const DropdownContentComponent = ({ className, children }) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        return child;
      })}
    </div>
  );
};

const DropdownComponent = ({ className, children }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            onClick: () => {
              handleClick();
              if (child.props.onClick) child.props.onClick();
            },
            active,
          });
        }
        return child;
      })}
    </div>
  );
};

export const Dropdown = styled(DropdownComponent)`
  position: relative;
  display: flex;
  align-items: center;
`;
export const DropdownOpen = styled(DropdownOpenComponent)``;
export const DropdownContent = styled(DropdownContentComponent)`
  ${(props) => !props.active && "display: none;"}
  min-width: 13.4rem;
  z-index: 99;
  position: absolute;
  top: 100%;
  right: 0;
  @media screen and (min-width: 1441px) {
  }
`;
