import { ThemeProvider } from 'styled-components';

import Router from './router/router';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </main>
  );
}

export default App;
