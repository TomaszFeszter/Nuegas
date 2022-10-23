import React from "react";
import styled from "styled-components";

const SwitchComponent = ({ className, ...rest }) => {
  return (
    <>
      <input className={className} type="checkbox" {...rest} />
    </>
  );
};

export const Switch = styled(SwitchComponent)`
  height: 3rem;
  width: 0;
  overflow: visible;
  position: absolute;

  &::before {
    content: "";
    display: block;
    height: 2.8rem;
    width: 5.3rem;
    border: ${(props) => `1px solid ${props.theme.light900}`};
    border-radius: 1.5rem;
    background-color: ${(props) => props.theme.white};
  }

  &::after {
    content: "";
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: 0.5rem;
    left: 0.5rem;
    background-color: ${(props) => props.theme.light900};
    transition: transform 0.3s, background-color 0.3s;
    border-radius: 1rem;
  }

  &:checked {
    &::after {
      background-color: ${(props) => props.theme.blue500};
      transform: translateX(2.5rem);
    }
  }
`;
