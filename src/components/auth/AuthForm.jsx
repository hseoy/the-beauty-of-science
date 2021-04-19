import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';
import AuthInput from './AuthInput';

const textMap = {
  signin: 'Sign in',
  signup: 'Sign up',
};

const AuthForm = ({ type }) => {
  const text = textMap[type];

  return (
    <AuthFormBlock>
      <div className="body">
        {type === 'signup' && (
          <AuthInput
            title="NAME"
            type="text"
            name="username"
            placeholder="Enter your name..."
          />
        )}
        <AuthInput
          title="EMAIL"
          type="email"
          name="email"
          placeholder="Enter your email..."
        />
        <AuthInput
          title="PW"
          type="password"
          name="password"
          placeholder="Enter your password..."
        />
        {type === 'signup' && (
          <AuthInput
            title="Re-PW"
            type="password"
            name="repassword"
            placeholder="Confirm your password..."
          />
        )}
        <Button fullwidth hover={false} reverse>
          {text}
        </Button>
      </div>
      <Footer>
        {type === 'signup' ? (
          <FooterLink to="/signin">Sign In</FooterLink>
        ) : (
          <FooterLink to="/signup">Sign Up</FooterLink>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

AuthForm.propTypes = {
  type: PropTypes.string,
};

AuthForm.defaultProps = {
  type: 'signup',
};

const AuthFormBlock = styled.div``;

const Footer = styled.footer`
  padding: 2rem 0;
  text-align: right;
`;

const FooterLink = styled(Link)`
  border-radius: 20px;
  padding: 0 10px;
  transition: 0.15s;
  font-size: 16px;
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-serif'};
  color: ${({ theme }) => theme.colors.accentColor || '#000'};
  background-color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
    background-color: ${({ theme }) => theme.colors.accentColor || '#000'};
  }
`;

export default AuthForm;
