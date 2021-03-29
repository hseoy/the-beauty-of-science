import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';
import S from './style';

const SignIn = ({ title }) => {
  const [email, setEmail] = useState('hello');
  const [password, setPassword] = useState('');

  const onSubmitSignIn = () => {
    console.log(email, password);
  };

  return (
    <S.Wrap>
      <S.ContentWrap>
        <S.Title>{title}</S.Title>
        <S.Body>
          <Input
            title="EMAIL"
            type="email"
            placeholder="Enter your email..."
            valueChangeHandler={setEmail}
          />
          <Input
            title="PW"
            type="password"
            placeholder="Enter your password..."
            valueChangeHandler={setPassword}
          />
          <Button clickHandler={onSubmitSignIn}>Sign In</Button>
        </S.Body>
        <S.Footer>
          <S.FooterLink to="/signup">Sign Up</S.FooterLink>
        </S.Footer>
      </S.ContentWrap>
    </S.Wrap>
  );
};

SignIn.propTypes = {
  title: PropTypes.string,
};

SignIn.defaultProps = {
  title: 'Sign In',
};

export default SignIn;
