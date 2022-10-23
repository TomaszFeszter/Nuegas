import styled from "styled-components";

export const Label = styled.label`
  //leftSpacing for switch
  padding-left: ${(props) => props.leftSpacing && "8rem"};
  //bottomSpacing for inputs
  padding-bottom: ${(props) => props.bottomSpacing && "2rem"};
  color: ${(props) => props.fontColor || props.theme.textDark800};
  font-weight: ${(props) => props.fontWeight || 600};
  font-size: ${(props) => props.fontSize || "1.4rem"};
  line-height: ${(props) => props.lineHeight || "2.1rem"};
`;
