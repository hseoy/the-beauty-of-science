import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/common/Button';
import LinkButton from 'components/common/LinkButton';
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
          <RoundLinkButton to="/signin">Sign In</RoundLinkButton>
        ) : (
          <RoundLinkButton to="/signup">Sign Up</RoundLinkButton>
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

const AuthFormBlock = styled.div`
  width: 25rem;
  margin: 0 auto;
`;

const Footer = styled.footer`
  padding: 1.5rem 0;
  text-align: right;
`;

const RoundLinkButton = styled(LinkButton)`
  border-radius: 2rem;
  padding: 0.25rem 0.8rem;
`;

export default AuthForm;
