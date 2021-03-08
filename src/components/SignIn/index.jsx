import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, S } from 'components/Sign';

const SignIn = ({ title }) => {
  return (
    <S.Wrap>
      <S.ContentWrap>
        <S.Title>{title}</S.Title>
        <S.Body>
          <Input title="ID" type="text" placeholder="Enter your id..." />
          <Input
            title="PW"
            type="password"
            placeholder="Enter your password..."
          />
          <Button>Sign In</Button>
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
