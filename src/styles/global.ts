import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`

  ${normalize}

  *{
    box-sizing: border-box;
    -ms-text-size-adjust: 100%; /* 2 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  
  html,
  body {
    overflow: hidden;
    font-style: normal;
    overscroll-behavior: none;
  }

`;

export default GlobalStyle;
