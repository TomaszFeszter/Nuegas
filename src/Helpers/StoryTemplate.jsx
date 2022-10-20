import React from "react";
import { GlobalFonts } from "../fonts/fonts";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../themes";

// eslint-disable-next-line
export const StoryTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalFonts />
      {children}
    </ThemeProvider>
  );
};
