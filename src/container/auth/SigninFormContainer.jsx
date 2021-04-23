import React from 'react';
// import { useDispatch } from 'react-redux';
import AuthFromContainer from './AuthFormContainer';

const SigninFormContainer = () => {
  // const dispatch = useDispatch();

  const onSubmit = () => {
    // @TODO
  };

  return <AuthFromContainer type="signin" onSubmit={onSubmit} />;
};

export default SigninFormContainer;
