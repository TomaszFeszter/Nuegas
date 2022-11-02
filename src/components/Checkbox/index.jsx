import React from "react";
import styled from "styled-components";

const CheckboxComponent = ({ className, ...rest }) => {
  return (
    <>
      <input className={className} type="checkbox" {...rest} />
    </>
  );
};

export const Checkbox = styled(CheckboxComponent)`
  height: 2.4rem;
  width: 0;
  overflow: visible;
  position: absolute;

  &::before {
    font-size: 2rem;
    line-height: 2.4rem;
    text-align: center;
    content: "✖";
    display: block;
    height: 2.4rem;
    width: 2.4rem;
    border: ${(props) => `1px solid ${props.theme.light900}`};
    border-radius: 1.2rem;
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.textDark800};
  }

  &:checked {
    &::before {
      content: "✔";
      background-color: ${(props) => props.theme.blue500};
      color: ${(props) => props.theme.textWhite};
      border: ${(props) => `1px solid ${props.theme.blue500}`};
    }
  }
`;
