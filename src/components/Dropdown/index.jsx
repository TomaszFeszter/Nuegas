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
    // <Wrapper className={className}>
    //   <div onClick={handleClick}>{activatingItem}</div>
    //   {dropdownActive && (
    //     <ul>
    //       {options.map((option) => (
    //         <li
    //           onClick={() => {
    //             handleClick();
    //             option.function();
    //           }}
    //           key={option.name}
    //         >
    //           <P2 lHeight="1.8rem">{option.name}</P2>
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </Wrapper>
  );
};

export const Dropdown = styled(DropdownComponent)`
  /* div:hover,
  ul:hover {
    cursor: pointer;
  }

  ul {
    background-color: ${(props) => props.theme.white};
    max-width: ${(props) => props.width || "25rem"};
    border: ${(props) => `1px solid ${props.theme.light900}`};
    border-top: none;
    border-radius: 1rem;

    li {
      padding: 1.5rem 2rem;
      background-color: ${(props) => props.theme.white};
      font-family: "Plus Jakarta Sans", sans-serif;
      border-radius: 1rem;

      &:hover {
        background-color: ${(props) => props.theme.blue200};
      }
    }
  } */
`;
export const DropdownOpen = styled(DropdownOpenComponent)``;
export const DropdownContent = styled(DropdownContentComponent)`
  ${(props) => !props.active && "display: none;"}
`;
