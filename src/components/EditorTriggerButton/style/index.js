import styled, { css } from 'styled-components';

const ButtonContent = styled.div`
  position: relative;
  transition: 0.3s ease-in-out all;
  transform-origin: 50% 0;
  transform-style: preserve-3d;
  width: 100%;
  line-height: 42px;

  ${({ theme }) =>
    theme.colors.primaryColor &&
    css`
      background-color: ${theme.colors.primaryColor};
    `}

  ${({ theme }) =>
    theme.colors.accentColor &&
    css`
      color: ${theme.colors.accentColor};
      border: 3px solid ${theme.colors.accentColor};
    `}

  &:after {
    content: '${props => props.hiddenTitle || 'Hello World'}';
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.3s ease-in-out all;
    transform-origin: 50% 0;
    transform: translate3d(0px, 105%, 0px) rotateX(-90deg);
    width: 100%;
    ${({ theme }) =>
      theme.colors.primaryColor &&
      css`
        color: ${theme.colors.primaryColor};
      `}

    ${({ theme }) =>
      theme.colors.accentColor &&
      css`
        background-color: ${theme.colors.accentColor};
      `}
  }
`;

const Button = styled.button`
  font-family: 'TmonTium', 'TmonMonsori', sans-serif;
  font-size: 1.2em;
  width: 200px;
  height: 50px;
  position: fixed;
  top: 50%;
  margin-top: -25px;
  perspective: 400px;
  z-index: 100;
  background-color: transparent;
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(50%, transparent), to(rgba(255, 255, 255, 0.3)));

  ${props =>
    props.left &&
    css`
      left: 50px;
    `}

  ${props =>
    props.right &&
    css`
      right: 50px;
    `}

  &:hover ${ButtonContent} {
    &:after {
      ${({ theme }) =>
        theme.colors.accentColor &&
        css`
          background-color: ${theme.colors.accentColor};
        `}
    }
    transform: translate3d(0px, 0px, -30px) rotateX(90deg);
  }
`;

export default { ButtonContent, Button };
