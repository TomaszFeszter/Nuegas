import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Plus Jakarta Sans', sans-serif;
}

ul, ol {
  list-style: none;
}
`;
