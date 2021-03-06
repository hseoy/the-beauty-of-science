import styled, { css } from 'styled-components';

const Wrap = styled.div`
  ${({ theme }) =>
    theme.colors.primaryColor &&
    css`
      background-color: ${theme.colors.primaryColor};
    `}
  width: 100%;
  height: 80px;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'TmonTium', 'TmonMonsori', sans-serif;
`;

const AuthorLink = styled.a`
  ${({ theme }) =>
    theme.colors.accentColor &&
    css`
      color: ${theme.colors.accentColor};
      border: 3px solid ${theme.colors.accentColor};
    `}
  margin: 0 2px;
  border-radius: 20px;
  padding: 2px 5px;
  transition: 0.15s;

  &:hover {
    text-decoration: none;

    ${({ theme }) =>
      theme.colors.accentColor &&
      css`
        background-color: ${theme.colors.accentColor};
      `}
    ${({ theme }) =>
      theme.colors.primaryColor &&
      css`
        color: ${theme.colors.primaryColor};
      `}
  }
`;

export { Wrap };
export { AuthorLink };
export default { Wrap, AuthorLink };
