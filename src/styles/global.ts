import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;

    --color-grey: #b6b6b6;
    --color-line-gray: #898989;
    --color-black: #000502;
    --color-yellow: #e4f245;
    --color-line-yellow: #aeb72a;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background: var(--color-grey);
    color: var(--color-black);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 700 1.6rem 'Montserrat', sans-serif;
    color: var(--color-black);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;
