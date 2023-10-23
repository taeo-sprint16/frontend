import { ThemeProvider } from 'styled-components';

import Router from './router/Router';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
