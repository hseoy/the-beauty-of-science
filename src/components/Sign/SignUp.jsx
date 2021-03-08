import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';
import S from './style';

const SignUp = ({ title }) => {
  return (
    <S.Wrap>
      <S.ContentWrap>
        <S.Title>{title}</S.Title>
        <S.Body>
          <Input title="NAME" type="text" placeholder="Enter your name..." />
          <Input title="ID" type="text" placeholder="Enter your id..." />
          <Input
            title="PW"
            type="password"
            placeholder="Enter your password..."
          />
          <Input
            title="Re-PW"
            type="password"
            placeholder="Confirm your password..."
          />
          <Button>Sign Up</Button>
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
