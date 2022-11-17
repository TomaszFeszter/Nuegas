import React from "react";
import { AlertTriangle } from "react-feather";
import styled from "styled-components";
import { H2 } from "../Headings";

const ErrorComponent = ({ className, children }) => {
  return (
    <div className={className}>
      <div>
        <AlertTriangle size={60} />
        <H2>{children}</H2>
      </div>
    </div>
  );
};

export const Error = styled(ErrorComponent)`
  width: 100%;
  height: 100%;
  div {
    display: flex;
    flex-direction: column;
    padding: 5rem;
    svg {
      fill: ${(props) => props.theme.red500};
    }
  }
`;
