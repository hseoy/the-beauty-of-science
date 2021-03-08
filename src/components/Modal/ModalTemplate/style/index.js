import styled, { css } from 'styled-components';

const Title = styled.h2`
  width: 100%;
  height: 40%;
  font-size: 2rem;
  padding-top: 0.67rem;
  padding-bottom: 0.67rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-all;
  ${({ theme }) =>
    theme.font.family.accent &&
    css`
      font-family: ${theme.font.family.accent};
    `}
  ${({ theme }) =>
    theme.colors.accentColor &&
    css`
      color: ${theme.colors.accentColor};
      border-bottom: 2px dotted ${theme.colors.accentCOlor};
    `}
`;

const Body = styled.p`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding: 2rem 0;
  ${({ theme }) =>
    theme.colors.accentColor &&
    css`
      color: ${theme.colors.accentColor};
    `}
`;

const Button = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 15px;
  font-size: 20px;
  font-weight: bold;
  ${({ theme }) =>
    theme.font.family.accent &&
    css`
      font-family: ${theme.font.family.accent};
    `}
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
`;

export { Title };
export { Body };
export { Button };
export default { Title, Body, Button };
