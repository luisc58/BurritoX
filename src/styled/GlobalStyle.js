import { createGlobalStyle } from 'styled-components';
// GLOBAL STYLING
const GlobalStyle = createGlobalStyle`
    *::before,
    *::after,
    * {
        box-sizing: border-box;
    }
    html,body {
        height: 100%;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        font-size: 13px;
        letter-spacing: 0.5px;

    }
    a, button {
        text-decoration: none;
        cursor: pointer;
        border: 0;
        outline: none;
    }
    a {
        cursor: pointer;
    }
    #root {
        min-height: 100vh;
    }


`;

export default GlobalStyle;
