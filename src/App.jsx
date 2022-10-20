import React from "react";
import { ThemeProvider } from "styled-components";
import { Btn } from "./components/Button";
import { H1, H2, H3 } from "./components/Headings";
import { P1, P2 } from "./components/Parahraphs";
import { GlobalStyle } from "./styles/globalStyles";
import { lightTheme } from "./themes";
import { ArrowDown } from "react-feather";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <H1 /*lineHeight={"2.4rem"}*/>test h1</H1>
        <H2 /*fontSize={"1.4rem"}*/>test h2</H2>
        <H3 /*fontWeight={"700"}*/>test h3</H3>
        <P1 /*lineHeight={"2.4rem"}*/>test p1</P1>
        <P2 /*fontSize={"1.4rem"}*/>test p2</P2>
        <Btn leftIcon={<ArrowDown />}></Btn>
        <Btn leftIcon={<ArrowDown />} secondary></Btn>
        <Btn>Button</Btn>
        <Btn secondary>Button</Btn>
        <Btn leftIcon={<ArrowDown />}>Button</Btn>
        <Btn rightIcon={<ArrowDown />} secondary>
          Button
        </Btn>
      </ThemeProvider>
    </div>
  );
}

export default App;
