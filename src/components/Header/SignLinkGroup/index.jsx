import React from 'react';
import S from './style';

const SignLinkGroup = () => {
  return (
    <S.SignLinkWrap>
      <S.SignInLink to="signin">Sign In</S.SignInLink>
      <S.SignUpLink to="signup">Sign Up</S.SignUpLink>
    </S.SignLinkWrap>
  );
};

export default SignLinkGroup;
