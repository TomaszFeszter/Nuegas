import styled from "styled-components";
//TODO refactor DRY
//Some headings are paragraphs
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
  font-weight: ${(props) => props.fontWeight || 500};
  font-size: ${(props) => props.fontSize || "1.6rem"};
  line-height: ${(props) => props.lineHeight || "2.4rem"};
`;

export const H4 = styled.h4`
  color: ${(props) => props.fontColor || props.theme.textDark800};
  font-weight: ${(props) => props.fontWeight || 600};
  font-size: ${(props) => props.fontSize || "1.4rem"};
  line-height: ${(props) => props.lineHeight || "2.1rem"};
`;

export const H5 = styled.h5`
  color: ${(props) => props.fontColor || props.theme.textDark800};
  font-weight: ${(props) => props.fontWeight || 500};
  font-size: ${(props) => props.fontSize || "1.2rem"};
  line-height: ${(props) => props.lineHeight || "1.5rem"};
`;
