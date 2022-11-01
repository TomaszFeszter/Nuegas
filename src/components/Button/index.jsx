import React from "react";
import styled from "styled-components";

const BtnComponent = ({
  className,
  leftIcon,
  rightIcon,
  handleClick,
  children,
}) => (
  <button onClick={handleClick} className={className}>
    {leftIcon && leftIcon}
    {children && <span>{children}</span>}
    {rightIcon && rightIcon}
  </button>
);

export const Btn = styled(BtnComponent)`
  display: flex;
  align-items: center;
  min-height: 2.9rem;
  padding: ${(props) =>
    props.children
      ? props.secondary
        ? "0.4rem 1.5rem"
        : "0.5rem 1.6rem"
      : props.secondary
      ? "0.8rem"
      : "0.9rem"};
  background: ${(props) =>
    props.secondary ? props.theme.white : props.theme.blue500};
  border: ${(props) =>
    props.secondary ? `1px solid ${props.theme.blue200}` : "none"};
  border-radius: 1rem;
  font-family: "Plus Jakarta Sans", sans-serif;

  font-weight: ${(props) => props.fontWeight || 600};
  font-size: ${(props) => props.fontSize || "1.2rem"};
  line-height: ${(props) => props.lineHeight || "1.9rem"};
  ${(props) => props.long && "width: 100%;"}

  color: ${(props) =>
    props.secondary ? props.theme.textDark500 : props.theme.textWhite};

  svg {
    width: 1.4rem;
    height: 1.4rem;
  }

  span {
    margin-left: ${(props) => (props.leftIcon ? "0.8rem" : "0")};
    margin-right: ${(props) => (props.rightIcon ? "0.8rem" : "0")};
  }

  &:hover {
    cursor: pointer;
    background: ${(props) =>
      props.secondary ? props.theme.white : props.theme.blue600};
    border: ${(props) =>
      props.secondary ? `1px solid ${props.theme.dark500}` : "none"};
    color: ${(props) =>
      props.secondary ? props.theme.textDark800 : props.theme.textWhite};
  }

  &:focus {
    background: ${(props) =>
      props.secondary ? props.theme.white : props.theme.blue500};
    border: ${(props) =>
      props.secondary
        ? `1px solid ${props.theme.blue200}`
        : `1px solid ${props.theme.blue300}`};
    padding: ${(props) => (props.children ? "0.4rem 1.5rem" : "0.8rem")};
    color: ${(props) =>
      props.secondary ? props.theme.textDark500 : props.theme.textWhite};

    &:hover {
      background: ${(props) =>
        props.secondary ? props.theme.white : props.theme.blue600};
      border: ${(props) =>
        props.secondary
          ? `1px solid ${props.theme.dark500}`
          : `1px solid ${props.theme.blue300}`};
      padding: ${(props) => (props.children ? "0.4rem 1.5rem" : "0.8rem")};
    }
  }
  &:active {
    background: ${(props) =>
      props.secondary ? props.theme.light800 : props.theme.blue700};
    border: ${(props) =>
      props.secondary ? `1px solid ${props.theme.blue200}` : "none"};
    color: ${(props) =>
      props.secondary ? props.theme.textDark800 : props.theme.textWhite};
    padding: ${(props) =>
      props.children
        ? props.secondary
          ? "0.4rem 1.5rem"
          : "0.5rem 1.6rem"
        : props.secondary
        ? "0.8rem"
        : "0.9rem"};
  }

  &:disabled {
    background: ${(props) =>
      props.secondary ? props.theme.white : props.theme.blue500};
    border: ${(props) =>
      props.secondary ? `1px solid ${props.theme.light800}` : "none"};
    opacity: ${(props) => (props.secondary ? "1" : "0.4")};
    color: ${(props) =>
      props.secondary ? props.theme.textDark800 : props.theme.textWhite};
  }
`;
