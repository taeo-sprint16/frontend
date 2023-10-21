import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`

  ${normalize}

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css');
  }

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
    font-family: Pretendard;
  }

`;

export default GlobalStyle;
