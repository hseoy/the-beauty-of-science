import React from 'react';
import { useDispatch } from 'react-redux';
import { signin } from 'modules/auth';
import AuthFromContainer from './AuthFormContainer';

const SigninFormContainer = () => {
  const dispatch = useDispatch();

  const onSubmit = form => {
    const { email, password } = form;
    dispatch(signin({ email, password }));
  };

  return <AuthFromContainer type="signin" onSubmit={onSubmit} />;
};

export default SigninFormContainer;
