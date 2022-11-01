import React from "react";
import styled from "styled-components";

export const PageComponent = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export const GridComponent = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export const CellComponent = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
// , size = 12
export const Page = styled(PageComponent)`
  max-width: 144rem;
  margin: 0 auto;
  overflow: hidden;
`;

export const Grid = styled(GridComponent)`
  display: flex;
  width: 100%;
`;

export const Cell = styled(CellComponent)`
  width: 100%;
  ${() => {
    let styles = "";

    for (let i = 1; i <= 12; i++) {
      styles += `
    ${(props) => props.size === i && `max-width: calc(100% / 12 * ${i})`}
    `;
    }

    return styles;
  }}
`;
