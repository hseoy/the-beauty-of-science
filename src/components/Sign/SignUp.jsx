import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';
import S from './style';

const SignUp = ({ title }) => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    repassword: '',
  });

  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const { username, email, password, repassword } = form;

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
            name="username"
            placeholder="Enter your name..."
            onChange={onChange}
          />
          <Input
            title="EMAIL"
            type="email"
            name="email"
            placeholder="Enter your email..."
            onChange={onChange}
          />
          <Input
            title="PW"
            type="password"
            name="password"
            placeholder="Enter your password..."
            onChange={onChange}
          />
          <Input
            title="Re-PW"
            type="password"
            name="repassword"
            placeholder="Confirm your password..."
            onChange={onChange}
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
