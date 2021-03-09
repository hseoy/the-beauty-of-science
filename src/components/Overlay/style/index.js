import styled, { css } from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #000000b3;
  z-index: -1;
  ${({ animation }) =>
    animation &&
    css`
      transition: 0.6s;
    `}
  ${({ visible }) =>
    visible
      ? css`
          height: 100%;
        `
      : css`
          height: 0%;
        `}
`;

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  overflow: hidden;
  ${({ animation }) =>
    animation &&
    css`
      transition: 0.6s;
    `}
  ${({ visible }) =>
    visible
      ? css`
          height: 100%;
        `
      : css`
          height: 0%;
        `}
`;

export { Overlay };
export { Wrap };
export default { Overlay, Wrap };
