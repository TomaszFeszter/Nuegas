import React from "react";
import { GlobalFonts } from "../fonts/fonts";

// eslint-disable-next-line
export const StoryTemplate = ({ children }) => {
  return (
    <div>
      <GlobalFonts />
      {children}
    </div>
  );
};
