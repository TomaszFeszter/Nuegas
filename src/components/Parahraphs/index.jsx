import styled from "styled-components";

export const P1 = styled.p`
  color: ${(props) => props.fontColor || props.theme.textDark800};
  font-weight: ${(props) => props.fontWeight || 500};
  font-size: ${(props) => props.fontSize || "1.6rem"};
  line-height: ${(props) => props.lineHeight || "2.4rem"};
`;

export const P2 = styled.p`
  color: ${(props) => props.fontColor || props.theme.textDark800};
  font-weight: ${(props) => props.fontWeight || 500};
  font-size: ${(props) => props.fontSize || "1.2rem"};
  line-height: ${(props) => props.lineHeight || "1.5rem"};
`;
