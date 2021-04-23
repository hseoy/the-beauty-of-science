import React from 'react';
// import { useDispatch } from 'react-redux';
import AuthFromContainer from './AuthFormContainer';

const SignupFormContainer = () => {
  // const dispatch = useDispatch();

  const onSubmit = () => {
    // @TODO
  };

  return <AuthFromContainer type="signup" onSubmit={onSubmit} />;
};

export default SignupFormContainer;
