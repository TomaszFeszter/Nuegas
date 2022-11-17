import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  @media screen and (min-width: 1441px) {
    background-color: ${(props) => props.theme.blue500};
    padding: 1rem;
  }
  @media screen and (min-width: 1681px) {
    background-color: ${(props) => props.theme.blue500};
    padding: 2rem;
  }
`;

export const Grid = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  height: 100%;
  @media screen and (min-width: 1441px) {
    max-width: 144rem;
    margin: 0 auto;
    border-radius: 1rem;
  }
`;

export const Cell = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100%;
  ${(props) => {
    let styles = "";

    if (props.size) {
      for (let i = 1; i <= 17; i++) {
        if (props.size === i) styles += `max-width: calc(100% / 17 * ${i})`;
      }
    } else styles += `max-width: calc(100%)`;

    return styles;
  }}
`;
