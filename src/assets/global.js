import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: #FFFFFF;
    background-image: "../assets/yoda_and_aurora.jpg";
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
`;
