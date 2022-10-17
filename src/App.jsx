import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
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
      </ThemeProvider>
    </div>
  );
}

export default App;
