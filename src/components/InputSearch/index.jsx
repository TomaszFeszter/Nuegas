import React from "react";
import { Search } from "react-feather";
import styled from "styled-components";

const InputSearchComponent = ({ className, type, ...rest }) => {
  return (
    <div className={className}>
      <input type={type} {...rest} />
      <Search />
    </div>
  );
};

export const InputSearch = styled(InputSearchComponent)`
  position: relative;
  max-width: 25rem;
  input {
    min-width: 25rem;
    border: ${(props) => `1px solid ${props.theme.light900}`};
    border-radius: 1rem;
    background-color: ${(props) => props.theme.white};
    padding: 1.4rem 2rem;
    color: ${(props) => props.theme.textDark500};
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2.2rem;
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }

    svg {
      stroke: ${(props) => props.theme.light900};
    }

    &::placeholder {
      color: ${(props) => props.theme.textDark300};
    }

    &:focus {
      outline-color: ${(props) => props.theme.blue500};
      &:not(:placeholder-shown) + svg {
        stroke: ${(props) => props.theme.textDark500};
      }
    }

    &:invalid:not(:placeholder-shown) {
      border-color: ${(props) => props.theme.red500};
    }
  }

  svg {
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
    width: 2rem;
    height: 2rem;
    stroke: ${(props) => props.theme.textDark300};
  }
`;
