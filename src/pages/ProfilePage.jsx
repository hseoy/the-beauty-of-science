import React from 'react';
import ProfileTemplate from 'components/profile/ProfileTemplate';
import PageTemplate from 'components/base/PageTemplate';

const SigninPage = () => {
  return (
    <PageTemplate hideHeader hideFooter>
      <ProfileTemplate />
    </PageTemplate>
  );
};

export default SigninPage;
