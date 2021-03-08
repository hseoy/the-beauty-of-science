import styled, { css } from 'styled-components';

const Button = styled.button`
  display: block;
  width: 400px;
  height: 50px;
  margin: 30px auto 0;
  font-size: 20px;
  ${({ theme }) =>
    theme.colors.accentColor &&
    css`
      background-color: ${theme.colors.accentColor};
    `}

  ${({ theme }) =>
    theme.colors.whiteColor &&
    css`
      color: ${theme.colors.whiteColor};
    `}

  ${({ theme }) =>
    theme.font.family.accent &&
    css`
      font-family: ${theme.font.family.accent};
    `}
`;

export default { Button };
