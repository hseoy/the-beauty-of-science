import React from 'react';
import { useDispatch } from 'react-redux';
import { signup } from 'modules/auth';
import AuthFromContainer from './AuthFormContainer';

const SignupFormContainer = () => {
  const dispatch = useDispatch();

  const onSubmit = form => {
    const { username, email, password } = form;
    dispatch(signup({ username, email, password }));
  };

  return <AuthFromContainer type="signup" onSubmit={onSubmit} />;
};

export default SignupFormContainer;
