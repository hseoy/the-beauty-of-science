import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const SignLinkCss = css`
  transition: 0.12s;
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
  border-radius: 3px;
  width: 90px;
  padding: 8px 0px;
  display: inline-block;

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

const SignLinkWrap = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
`;

const SignInLink = styled(Link)`
  ${SignLinkCss}
  margin-right: 10px;
`;

const SignUpLink = styled(Link)`
  ${SignLinkCss}
`;

export { SignLinkWrap };
export { SignInLink };
export { SignUpLink };

export default {
  SignLinkWrap,
  SignInLink,
  SignUpLink,
};
