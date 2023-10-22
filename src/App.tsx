import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import Router from './router/Router';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <main>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </RecoilRoot>
    </main>
  );
}

export default App;
