import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
        --red-10: #ff8f71;
        --red-50: #ff7b86;
        --red-70: #ff525d;
        --red-100: #ff3e55;

        --blue-100: #3f4164;
        --blue-300: #1f3f5b;
        --blue-400: #1f3e5a;
        --blue-500: #2c2d3f;
        --blue-600: #24242C;
        --blue-900: #25252d;
        --blue-950: #2d2e40;

        --white: #ffffff;

        --gray-50: #ececec;
        --gray-100: #c8c8cb;
        --gray-300: #4b5862;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--background);
    }

    body, input, textarea, button {
        font-family: 'Overpass', 'Ubuntu', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
`;