import { defaultTheme } from './utils/theme';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import AppRouter from './routers/AppRouter';
import React from 'react';

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body {
    font-family: 'Roboto Condensed', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
