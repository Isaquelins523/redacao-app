// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }

  h1 {
    font-size: 2.5rem;
    color: #333;
  }

  p {
    margin-bottom: 10px;
    margin-top: 15px;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
