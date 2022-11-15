import { BookOpen } from "react-feather";
import React from "react";
import styled from "styled-components";
const LogoIconComponent = ({ className }) => {
  return (
    <div className={className}>
      <BookOpen />
    </div>
  );
};

export const LogoIcon = styled(LogoIconComponent)`
  svg {
    width: 3.3rem;
    height: 3.3rem;
    background-color: ${(props) => props.theme.blue500};
    stroke: ${(props) => props.theme.blue500};
    fill: ${(props) => props.theme.white};
    border-radius: 1rem;
    padding-top: 0.3rem;
  }
`;
