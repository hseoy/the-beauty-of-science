import React from 'react';
import AuthTemplate from 'components/auth/AuthTemplate';
import SigninForm from 'container/auth/SigninFormContainer';
import PageTemplate from 'components/base/PageTemplate';

const SigninPage = () => {
  return (
    <PageTemplate hideHeader hideFooter useCustomInner>
      <AuthTemplate>
        <SigninForm />
      </AuthTemplate>
    </PageTemplate>
  );
};

export default SigninPage;
