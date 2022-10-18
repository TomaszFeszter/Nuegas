import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { H1, H2, H3, H4, H5 } from "./components/Headings";
import { lightTheme } from "./themes";
import { darkTheme } from "./themes";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Button onClick={themeToggler}>testTheme</Button>
        <H1 /*lineHeight={"2.4rem"}*/>test h1</H1>
        <H2 /*fontSize={"1.4rem"}*/>test h2</H2>
        <H3 /*fontWeight={"700"}*/>test h3</H3>
        <H4 /*fontWeight={"700"}*/>test h4</H4>
        <H5 /*fontWeight={"700"}*/>test h5</H5>
      </ThemeProvider>
    </div>
  );
}

export default App;
