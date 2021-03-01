import { DefaultTheme, ThemeProvider } from "styled-components";
import { useState } from 'react'

import darkTheme from "../styles/dark.theme";
import lightTheme from '../styles/light.theme';
import GlobalStyle from "../styles/global";

function App({ Component, pageProps }) {

  const [theme, setTheme] = useState<DefaultTheme>(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
