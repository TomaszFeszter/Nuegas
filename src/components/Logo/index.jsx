import React from "react";
import styled from "styled-components";
import { H1 } from "../Headings";

const LogoComponent = ({ className, logo, name }) => {
  return (
    <div className={className}>
      {logo}
      <H1>{name}</H1>
    </div>
  );
};

export const Logo = styled(LogoComponent)`
  display: flex;
  align-items: center;
  svg {
    width: 3.3rem;
    height: 3.3rem;
  }
  h1 {
    margin-left: 1.2rem;
  }
`;
