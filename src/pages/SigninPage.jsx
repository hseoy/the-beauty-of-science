import React from 'react';
import AuthTemplate from 'components/auth/AuthTemplate';
import SigninForm from 'container/auth/SigninFormContainer';

const SigninPage = () => {
  return (
    <AuthTemplate>
      <SigninForm />
    </AuthTemplate>
  );
};

export default SigninPage;
