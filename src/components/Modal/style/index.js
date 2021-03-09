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

const Inner = styled.div`
  box-sizing: border-box;
  position: relative;
  border-radius: 20px;
  min-width: 500px;
  overflow: hidden;

  ${({ theme }) =>
    theme.colors.primaryColor &&
    css`
      background-color: ${theme.colors.primaryColor};
    `}
  ${({ theme }) =>
    theme.colors.accentColor &&
    css`
      border: 5px solid ${theme.colors.accentColor};
      color: ${theme.colors.accentColor};
    `}
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 40px;
  height: 40px;
  background-color: transparent;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
`;

export { ModalWrap };
export { Inner };
export { CloseButton };
export { Content };
export default { ModalWrap, Inner, CloseButton, Content };
