import styled, { css } from 'styled-components';

const ButtonContent = styled.div`
  position: relative;
  transition: 0.3s ease-in-out all;
  transform-origin: 50% 0;
  transform-style: preserve-3d;
  width: 100%;
  line-height: 42px;
  background-color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  color: ${({ theme }) => theme.colors.accentColor || '#000'};
  border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};

  &:after {
    content: '${props => props.hiddenTitle || 'Hello World'}';
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.3s ease-in-out all;
    transform-origin: 50% 0;
    transform: translate3d(0px, 105%, 0px) rotateX(-90deg);
    width: 100%;
    color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
    background-color: ${({ theme }) => theme.colors.accentColor || '#000'};
  }
`;

const Button = styled.button`
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
      background-color: ${({ theme }) => theme.colors.accentColor || '#000'};
    }
    transform: translate3d(0px, 0px, -30px) rotateX(90deg);
  }
`;

export default { ButtonContent, Button };
