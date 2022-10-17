import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => props.theme.textWhite};
  background: ${(props) => props.theme.blue700};
  border: none;
  width: 200px;
  height: 100px;
  font-size: 30px;
`;
