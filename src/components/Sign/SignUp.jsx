import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';
import S from './style';

const SignUp = ({ title }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const onSubmitSignIn = () => {
    console.log(username, email, password, repassword);
  };

  return (
    <S.Wrap>
      <S.ContentWrap>
        <S.Title>{title}</S.Title>
        <S.Body>
          <Input
            title="NAME"
            type="text"
            placeholder="Enter your name..."
            valueChangeHandler={setUsername}
          />
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
          <Input
            title="Re-PW"
            type="password"
            placeholder="Confirm your password..."
            valueChangeHandler={setRepassword}
          />
          <Button clickHandler={onSubmitSignIn}>Sign Up</Button>
        </S.Body>
        <S.Footer>
          <S.FooterLink to="/signin">Sign In</S.FooterLink>
        </S.Footer>
      </S.ContentWrap>
    </S.Wrap>
  );
};

SignUp.propTypes = {
  title: PropTypes.string,
};

SignUp.defaultProps = {
  title: 'Sign Up',
};

export default SignUp;
