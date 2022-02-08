import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 15px;
    }

    @media (max-width: 720px) {
      font-size: 12px;
    }
  }

  body {
    background: #FFFFFF;
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
`;
