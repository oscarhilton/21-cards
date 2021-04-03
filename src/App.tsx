import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import defaultTheme from "./themes/defaultTheme.theme";
import GameArea from "components/organisms/GameArea.organism";

function App() {
  const [theme, setTheme] = React.useState(defaultTheme);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GameArea/>
      </ThemeProvider>
    </div>
  );
}

export default App;
