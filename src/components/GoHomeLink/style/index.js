import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const GoHomeLink = styled(Link)`
  display: inline-block;
  position: fixed;
  top: 0;
  left: 0;
  width: 90px;
  margin: 10px;
  padding: 8px 0px;
  text-align: center;
  transition: 0.12s;
  z-index: 999;
  font-family: 'TmonTium', 'TmonMonsori', sans-serif;

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

export default { GoHomeLink };
