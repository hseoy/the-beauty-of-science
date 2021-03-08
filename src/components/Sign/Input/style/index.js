import styled, { css } from 'styled-components';
import { lighten } from 'polished';

const InputBox = styled.div`
  width: 400px;
  height: 50px;
  margin: 30px auto;
  position: relative;
  display: flex;

  ${({ theme }) =>
    theme.colors.whiteColor &&
    css`
      background-color: ${theme.colors.whiteColor};
    `}

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const InputTitle = styled.h3`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 120px;
  margin: 0 auto 0 20px;
  font-size: 20px;
  &::after {
    content: ' :';
  }
  ${({ theme }) =>
    theme.font.family.accent &&
    css`
      font-family: ${theme.font.family.accent};
    `}
`;

const Input = styled.input`
  margin-right: 20px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 18px;
  ${({ theme }) =>
    theme.font.family.accent &&
    css`
      font-family: ${theme.font.family.accent};
    `}

  &::placeholder {
    ${({ theme }) =>
      theme.colors.accentColor &&
      css`
        color: ${lighten(0.8, theme.colors.accentColor)};
      `}
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export { InputBox };
export { InputTitle };
export { Input };
export default { InputBox, InputTitle, Input };
