import React from "react";
import { ThemeProvider } from "styled-components";
import { Btn } from "./components/Button";
import { H1, H2, H3 } from "./components/Headings";
import { P1, P2 } from "./components/Parahraphs";
import { GlobalStyle } from "./styles/globalStyles";
import { lightTheme } from "./themes";
import { ArrowDown } from "react-feather";
import { Switch } from "./components/Switch";
import { Field } from "./components/Field";
import { Input } from "./components/Input";
import { RadioInput } from "./components/Radioinput";
import { Dropdown } from "./components/Dropdown";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("English");
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
        <Field
          leftSpacing
          id="testCheckbox"
          label="checkbox label"
          padding="0.4rem 0"
        >
          <Switch id="testCheckbox" />
        </Field>
        <Field id="inputText" label="Type something" bottomSpacing>
          <Input type="email" id="inputText" placeholder="email" />
        </Field>
        <RadioInput
          id="test"
          name="testName"
          values={["marek", "wawrzyn", "baltazar"]}
          label="Choose Name"
          padding="1rem 0"
        />
        <Dropdown
          options={["English", "German", "French"]}
          selectedOption={language}
          changeSelectedOption={setLanguage}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
