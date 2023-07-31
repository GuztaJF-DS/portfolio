import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    color: #292929;
    outline: 0;
    font-family: 'Noto Sans', sans-serif;
    box-sizing: border-box;
    scrollbar-width: 5px;
    scrollbar-color: #333333 #cccccc;
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    ::-webkit-scrollbar-track {
      background: #cccccc;
    }
    ::-webkit-scrollbar-thumb {
    background-color: #333333;
    border-radius: 10px;
  }
  }

  html{
    scroll-behavior:smooth;
    scroll-margin-top: -100px;
  }
  html, body {
    background-color: #fffbf4;
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