import styled, { css } from 'styled-components';

const ModalWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.6s;
  overflow: hidden;
  width: 100%;
  ${({ visible }) =>
    visible
      ? css`
          height: 100%;
        `
      : css`
          height: 0%;
        `}
`;

export default { ModalWrap };
