import React from "react";
import { useState } from "react";
import styled from "styled-components";

const InputComponent = ({ type, handleChange, ...rest }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    handleChange && handleChange(e);
  };
  return <input type={type} value={value} onChange={onChange} {...rest} />;
};

export const Input = styled(InputComponent)`
  min-width: 25rem;
  border: ${(props) => `1px solid ${props.theme.light900}`};
  border-radius: 1rem;
  background-color: ${(props) => props.theme.white};
  padding: 1.5rem 2rem;
  font-family: "Plus Jakarta Sans", sans-serif;
  position: relative;

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
