import PlusJakartaSansRegular from "./PlusJakartaSans-Regular.ttf";
import PlusJakartaSansMedium from "./PlusJakartaSans-Medium.ttf";
import PlusJakartaSansSemiBold from "./PlusJakartaSans-SemiBold.ttf";
import { createGlobalStyle } from "styled-components";

export const GlobalFonts = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');

@font-face {
  font-family: 'PlusJakartaSans';
  src: url(${PlusJakartaSansRegular}) format('ttf');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'PlusJakartaSans';
  src: url(${PlusJakartaSansMedium}) format('ttf');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'PlusJakartaSans';
  src: url(${PlusJakartaSansSemiBold}) format('ttf');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

body {
  font-family: 'Plus Jakarta Sans', sans-serif;
}
`;
