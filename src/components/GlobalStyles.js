import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #1f1f1f;
        color: #fff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    a {
        text-decoration: none;
    }

    input {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    img {
        width: 100%;
        display: block;
    }

    h1 {
        display: block;
        padding: 1rem 0;
        font-size: 3rem;
        color: rebeccapurple;
        text-align: center;
        cursor: pointer;

        span {
            color: white;
            font-size: 1rem;
        }

        &:hover {
            color: #52e2ca;
        }
    }

    .App-content {
        display: flex;
        flex-direction: column;
        font-size: calc(8px + 1vmin);
        min-height: 100vh;
        text-align: left;
        padding: 16px;
        width: 100%;
        max-width: 90rem;
        margin: 0 auto;
    }
`

export default GlobalStyles