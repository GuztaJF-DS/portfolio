import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    background-color: #fffbf4;
    color: #292929;
    outline: 0;
    font-family: 'Noto Sans', sans-serif;
    box-sizing: border-box;
  }
  html{
    scroll-behavior:smooth;
    scroll-margin-top: -100px;
  }
  html, body {
    cursor: default;
    z-index: 0;
    min-height: 100vh;
  }
  main {
    padding: 0%;
    display: flex;
    flex-direction: column;
  }
`;