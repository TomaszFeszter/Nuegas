import styled from "styled-components";
//TODO refactor DRY
export const H1 = styled.h1`
  color: ${(props) => props.fontColor || props.theme.textDark800};
  font-weight: ${(props) => props.fontWeight || 600};
  font-size: ${(props) => props.fontSize || "3.2rem"};
  line-height: ${(props) => props.lineHeight || "4.8rem"};
`;

export const H2 = styled.h2`
  color: ${(props) => props.fontColor || props.theme.textDark800};
  font-weight: ${(props) => props.fontWeight || 600};
  font-size: ${(props) => props.fontSize || "2.4rem"};
  line-height: ${(props) => props.lineHeight || "3.6rem"};
`;

export const H3 = styled.h3`
  color: ${(props) => props.fontColor || props.theme.textDark800};
  font-weight: ${(props) => props.fontWeight || 600};
  font-size: ${(props) => props.fontSize || "1.4rem"};
  line-height: ${(props) => props.lineHeight || "2.1rem"};
`;
