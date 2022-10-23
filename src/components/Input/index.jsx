import React from "react";
import styled from "styled-components";

const InputComponent = ({ type, ...rest }) => {
  return <input type={type} {...rest} />;
};

export const Input = styled(InputComponent)`
  min-width: 25rem;
  border: ${(props) => `1px solid ${props.theme.light900}`};
  border-radius: 1rem;
  background-color: ${(props) => props.theme.white};
  padding: 1.5rem 2rem;
  font-family: "Plus Jakarta Sans", sans-serif;

  &::placeholder {
    color: ${(props) => props.theme.textDark300};
  }

  &:focus {
    outline-color: ${(props) => props.theme.blue500};
  }

  &:invalid:not(:placeholder-shown) {
    border-color: ${(props) => props.theme.red500};
  }
`;
