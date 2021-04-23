import React from 'react';
import AuthTemplate from 'components/auth/AuthTemplate';
import SignupForm from 'container/auth/SignupFormContainer';

const SigninPage = () => {
  return (
    <AuthTemplate>
      <SignupForm />
    </AuthTemplate>
  );
};

export default SigninPage;
