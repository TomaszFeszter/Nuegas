import React from "react";
import { GlobalFonts } from "../fonts/fonts";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../themes";
import { GlobalStyle } from "../styles/globalStyles";

// eslint-disable-next-line
export const StoryTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <GlobalFonts />
      {children}
    </ThemeProvider>
  );
};
