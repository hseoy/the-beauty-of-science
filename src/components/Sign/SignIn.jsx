import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';
import S from './style';

const SignIn = ({ title }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const { email, password } = form;

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
