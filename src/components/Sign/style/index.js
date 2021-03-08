import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) =>
    theme.colors.primaryColor &&
    css`
      background-color: ${theme.colors.primaryColor};
    `}
`;

const ContentWrap = styled.div`
  width: 60%;
  display: inline-block;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 30px;
  text-align: center;
  ${({ theme }) =>
    theme.font.family.accent &&
    css`
      font-family: ${theme.font.family.accent};
    `}
  ${({ theme }) =>
    theme.colors.accentColor &&
    css`
      color: ${theme.colors.accentColor};
    `}
`;

const Body = styled.div`
  padding: 30px 0;
`;

const Footer = styled.div`
  width: 400px;
  margin: 0 auto;
  text-align: right;
`;

const FooterLink = styled(Link)`
  border-radius: 20px;
  padding: 0 10px;
  transition: 0.15s;
  font-size: 16px;

  ${({ theme }) =>
    theme.font.family.accent &&
    css`
      font-family: ${theme.font.family.accent};
    `}
  ${({ theme }) =>
    theme.colors.accentColor &&
    css`
      color: ${theme.colors.accentColor};
      border: 3px solid ${theme.colors.accentColor};
    `}
  ${({ theme }) =>
    theme.colors.primaryColor &&
    css`
      background-color: ${theme.colors.primaryColor};
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

export { Wrap };
export { ContentWrap };
export { Title };
export { Body };
export { Footer };
export { FooterLink };
export default { Wrap, ContentWrap, Title, Body, Footer, FooterLink };
