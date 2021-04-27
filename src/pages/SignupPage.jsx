import React from 'react';
import AuthTemplate from 'components/auth/AuthTemplate';
import SignupForm from 'container/auth/SignupFormContainer';
import PageTemplate from 'components/base/PageTemplate';

const SigninPage = () => {
  return (
    <PageTemplate hideHeader hideFooter useCustomInner>
      <AuthTemplate>
        <SignupForm />
      </AuthTemplate>
    </PageTemplate>
  );
};

export default SigninPage;
