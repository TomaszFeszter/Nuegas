import React from "react";
import styled from "styled-components";
import { Btn } from "../Button";
import { P1, P2 } from "../Parahraphs";

const CardComponent = ({
  className,
  heading,
  content,
  btnText,
  handleClick,
}) => {
  return (
    <div className={className}>
      <div>
        <span></span>
        <div>
          <P1>{heading}</P1>
          <P2>{content}</P2>
        </div>
        <Btn secondary long handleClick={handleClick}>
          {btnText}
        </Btn>
      </div>
    </div>
  );
};

export const Card = styled(CardComponent)`
  padding-top: 2.4rem;
  > div {
    min-height: 24.8rem;
    max-width: 18.8rem;
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.dark800};
    border-radius: 1rem;
    position: relative;
    ::before,
    ::after {
      position: absolute;
      width: 4.8rem;
      height: 4.8rem;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 50%;
    }
    ::before {
      content: "";
      top: -1.8rem;
      background-color: ${(props) => props.theme.dark500};
      filter: blur(12px);
      z-index: 0;
    }
    ::after {
      content: "?";
      font-family: "Satoshi";
      font-weight: 700;
      font-size: 2.8rem;
      line-height: 3.4rem;
      background-color: ${(props) => props.theme.dark800};
      color: ${(props) => props.theme.textWhite};
      border: ${(props) => `4px solid ${props.theme.white}`};
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      top: -2.6rem;
    }

    > span {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      overflow: hidden;
      ::before,
      ::after {
        position: absolute;
        content: "";
        width: 16rem;
        height: 16rem;
        border-radius: 50%;
        background-color: ${(props) => `${props.theme.white}08`};
        z-index: 0;
      }
      ::before {
        left: -9.4rem;
        top: -10rem;
      }
      ::after {
        right: -9.2rem;
        bottom: -8rem;
      }
    }

    > div {
      margin: auto 0;
      text-align: center;
      p {
        color: ${(props) => props.theme.textWhite};
        &:not(:last-child) {
          margin-bottom: 1.2rem;
        }
      }
    }

    button {
      height: 4rem;
      position: relative;
      z-index: 1;
      justify-content: center;
    }
  }
`;
