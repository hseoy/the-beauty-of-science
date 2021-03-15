import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items;
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-serif'};
`;

export const Content = styled.div`
  padding-top: 20px;
`;

const ButtonCss = css`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  color: ${({ theme }) => theme.colors.accentColor || '#000'};
  border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
  padding: 5px 10px;
  transition: 0.2s;
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentColor || '#000'};
    color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  }
`;

export const SignInLink = styled(Link)`
  ${ButtonCss};
  &:hover {
    text-decoration: none;
  }
`;

export const SignedButton = styled.button`
  ${ButtonCss};
`;
