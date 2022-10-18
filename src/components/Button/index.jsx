import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => props.theme.textWhite};
  background: ${(props) => props.theme.blue700};
  border: none;
  width: 20rem;
  height: 10rem;
  font-size: 3rem;
  &:hover {
    cursor: pointer;
  }
`;
