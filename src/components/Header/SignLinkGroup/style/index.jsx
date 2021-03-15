import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const SignLinkCss = css`
  transition: 0.12s;
  background-color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  color: ${({ theme }) => theme.colors.accentColor || '#000'};
  border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
  border-radius: 3px;
  width: 90px;
  padding: 8px 0px;
  display: inline-block;
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};

  &:hover {
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.accentColor || '#000'};
    color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
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
