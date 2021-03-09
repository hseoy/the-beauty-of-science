import styled, { css } from 'styled-components';

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

export { Inner };
export { CloseButton };
export { Content };
export default { Inner, CloseButton, Content };
