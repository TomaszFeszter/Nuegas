import React from "react";
import styled from "styled-components";
import { P1 } from "../Parahraphs";

const ProgressComponent = ({ className, value, max, title, ...rest }) => {
  return (
    <div className={className}>
      {title && (
        <title>
          <P1>Progress</P1>
          <P1 fontColor={(props) => props.theme.blue500}>
            {(value / max) * 100}%
          </P1>
        </title>
      )}
      <progress value={value} max={max} {...rest} />
    </div>
  );
};

export const Progress = styled(ProgressComponent)`
  max-width: ${(props) =>
    props.long ? "33.5rem" : props.width ? props.width : "29rem"};

  title,
  progress {
    width: 100%;
  }
  title {
    display: flex;
    justify-content: space-between;
  }

  progress {
    height: 0.8rem;
    background-color: ${(props) => props.theme.blue300};
    border-radius: 0.4rem;
    position: relative;

    &::-webkit-progress-bar {
      background-color: ${(props) => props.theme.blue300};
      border-radius: 0.4rem;
    }

    &::-moz-progress-bar {
      background-color: ${(props) => props.theme.blue300};
      border-radius: 0.4rem;
    }

    &::-moz-progress-value {
      background-color: ${(props) => props.theme.blue500};
      border-radius: 0.4rem;
      transition: all 0.3s;
    }

    &::-webkit-progress-value {
      background-color: ${(props) => props.theme.blue500};
      border-radius: 0.4rem;
      transition: all 0.3s;
    }

    &::after {
      transition: all 0.3s;
      content: "";
      width: 1.2rem;
      height: 1.2rem;
      background-color: ${(props) => props.theme.blue500};
      border: ${(props) => `2px solid ${props.theme.white}`};
      border-radius: 0.8rem;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      ${({ value, max }) => `
      left: ${(value / max) * 100}%;
      `};
    }
  }
`;
