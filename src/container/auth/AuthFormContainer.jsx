import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from 'modules/auth';
import AuthForm from 'components/auth/AuthForm';

const AuthFormContainer = ({ type, onSubmit }) => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({ form: auth[type] }));

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(changeField({ form: type, key: name, value }));
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  useEffect(() => {
    dispatch(initializeForm(type));
  }, [dispatch]);

  return (
    <AuthForm
      type={type}
      form={form}
      onChange={onChange}
      onSubmit={onSubmitHandler}
    />
  );
};

AuthFormContainer.propTypes = {
  type: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};

AuthFormContainer.defaultProps = {
  onSubmit: null,
};

export default AuthFormContainer;
