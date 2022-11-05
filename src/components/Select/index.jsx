import React, { useState } from "react";
import { ChevronDown } from "react-feather";
import styled from "styled-components";
import { P2 } from "../Parahraphs";
import { Wrapper } from "../Wrapper";

const Rotate = styled.span`
  transition: transform 0.3s;
  transform: ${(props) =>
    props.isActive ? `rotate(${props.deg}deg)` : "none"};
`;

const SelectComponent = ({
  className,
  options,
  changeSelectedOption,
  selectedOption,
  ...rest
}) => {
  const [selectActive, setSelectActive] = useState(false);

  const handleClick = () => {
    setSelectActive(!selectActive);
  };
  return (
    <Wrapper className={className}>
      <div onClick={handleClick}>
        <input type="hidden" value={selectedOption} {...rest} />
        <P2 lHeight="1.8rem">{selectedOption}</P2>
        <Rotate isActive={selectActive} deg="180">
          <ChevronDown size={20} />
        </Rotate>
      </div>
      {selectActive && (
        <ul>
          {options.map((option) => (
            <li
              onClick={() => {
                handleClick();
                changeSelectedOption(option);
              }}
              key={option}
            >
              <P2 lHeight="1.8rem">{option}</P2>
            </li>
          ))}
        </ul>
      )}
    </Wrapper>
  );
};

export const Select = styled(SelectComponent)`
  position: relative;
  max-width: ${(props) => props.width || "25rem"};
  div {
    width: 100%;
    border: ${(props) => `1px solid ${props.theme.light900}`};
    border-radius: 1rem;
    background-color: ${(props) => props.theme.white};
    padding: 1.5rem 2rem;
    font-family: "Plus Jakarta Sans", sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  div:hover,
  ul:hover {
    cursor: pointer;
  }

  ul {
    position: absolute;
    z-index: 1;
    width: 100%;
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
  }
`;
