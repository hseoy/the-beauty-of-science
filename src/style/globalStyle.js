import { createGlobalStyle } from 'styled-components';
import 'assets/fonts/fonts.css';

const globalStyle = createGlobalStyle`
  :hover, :focus {
    outline: none;
  }

  html, body {
    width: 100%;
    min-width: 1550px;
    min-height: 100%;
    font-family: 'NanumSquareR', 'NanumBarunpenR', sans-serif;
  }

  body, h1, h2, h3, h4, h5, h6,
  p, blockquote, pre, hr,
  dl, dd, ol, ul, figure,
  input, button, th, td, textarea, div {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
  }

  button {
    border: 0 none;
    border-radius: 0;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  img, input, button {
    vertical-align: middle;
  }
`;

export default globalStyle;
