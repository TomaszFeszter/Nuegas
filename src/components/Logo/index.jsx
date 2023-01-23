import React from "react";
import styled from "styled-components";

const Name = styled.h2`
  color: ${(props) => props.fontColor || props.theme.textDark800};
  font-weight: ${(props) => props.fontWeight || 600};
  font-size: ${(props) => props.fontSize || "3.2rem"};
  line-height: ${(props) => props.lineHeight || "4.8rem"};
`;

const LogoComponent = ({ className, logo, name }) => {
  return (
    <div className={className}>
      {logo}
      <Name>{name}</Name>
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
