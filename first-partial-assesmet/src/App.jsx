import { defaultTheme } from './utils/theme';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './layout/Header';
import { ProductDetail } from './pages/ProductDetail';

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body {
    font-family: 'Roboto Condensed', sans-serif;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme} >
        <Header />
        < ProductDetail />
      </ThemeProvider>
    </>
  );
}

export default App;
