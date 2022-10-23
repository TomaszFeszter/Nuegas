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

const DropdownComponent = ({
  className,
  options,
  changeSelectedOption,
  selectedOption,
}) => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const handleClick = () => {
    setDropdownActive(!dropdownActive);
  };
  return (
    <Wrapper className={className}>
      <div onClick={handleClick}>
        <P2 lHeight="1.8rem">{selectedOption}</P2>
        <Rotate isActive={dropdownActive} deg="180">
          <ChevronDown size={20} />
        </Rotate>
      </div>
      {dropdownActive && (
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

export const Dropdown = styled(DropdownComponent)`
  div {
    max-width: ${(props) => props.width || "25rem"};
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
