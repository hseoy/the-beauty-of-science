import { createGlobalStyle } from 'styled-components';
import hexRgb from 'hex-rgb';
import 'assets/fonts/fonts.css';

const globalStyle = createGlobalStyle`
  ::selection {
    background-color: ${({ theme }) =>
      hexRgb(theme.colors.accentColor || '#000', {
        format: 'css',
        alpha: 0.99,
      })};
    color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  }

  #root {
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
  }

  :hover, :focus {
    outline: none;
  }

  html, body {
    width: 100%;
    min-width: 1550px;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-family: ${({ theme }) => theme.font.family.base || 'sans-serif'};
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


  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

export default globalStyle;
