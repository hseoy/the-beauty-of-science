import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { changeField, initializeForm } from 'modules/auth';
import passwordValidate from 'lib/passwordValidate';
import AuthForm from 'components/auth/AuthForm';
import { setUser, setAvatar } from 'modules/user';
import AuthModal from 'components/auth/AuthModal';

const AuthFormContainer = ({ type, onSubmit }) => {
  const { t } = useTranslation('translation', { useSuspense: false });

  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(state => ({
    form: state.auth[type],
    auth: state.auth.auth,
    authError: state.auth.authError,
  }));

  const modalInitialState = {
    visible: false,
    title: '',
    body: '',
  };
  const [modal, setModal] = useState(modalInitialState);

  const modalCloseHandler = () => {
    if (auth) {
      dispatch(setAvatar());
      dispatch(setUser());
    }
    setModal({ ...modal, visible: false });
    dispatch(initializeForm(type));
  };

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(changeField({ form: type, key: name, value }));
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    const errorModalContent = {
      visible: false,
      title: t('common.error').toUpperCase(),
      body: '',
    };

    if ([username, password].includes('')) {
      errorModalContent.visible = true;
      errorModalContent.body = t('form.enterAll');
    } else if (type === 'signup') {
      if ([username, password, passwordConfirm].includes('')) {
        errorModalContent.visible = true;
        errorModalContent.body = t('form.enterAll');
      } else if (!passwordValidate(password)) {
        errorModalContent.visible = true;
        errorModalContent.body = t('signup.failed.invalidPw');
      } else if (password !== passwordConfirm) {
        errorModalContent.visible = true;
        errorModalContent.body = t('signup.failed.doNotMatch');
      }
    }

    if (errorModalContent.visible) {
      setModal(errorModalContent);
      return;
    }

    if (onSubmit) {
      onSubmit(form);
    }
  };

  useEffect(() => {
    dispatch(initializeForm(type));
  }, [dispatch, type]);

  useEffect(() => {
    const resultModalContent = {
      ...modalInitialState,
      visible: !!(auth || authError),
    };

    if (authError) {
      resultModalContent.title = t('common.error').toUpperCase();
      if (type === 'signin') {
        resultModalContent.body = t(`signin.failed`);
      } else if (authError.response.status === 409) {
        resultModalContent.body = t('signup.failed.alreadySigned');
      } else {
        resultModalContent.body = t(`signup.failed.failed`);
      }
    }

    if (auth) {
      resultModalContent.title = t('common.success').toUpperCase();
      resultModalContent.body = t(`${type}.success`);
    }

    if (resultModalContent.visible) {
      setModal(resultModalContent);
    }
  }, [auth, authError, type]);

  return (
    <>
      <AuthForm
        type={type}
        form={form}
        onChange={onChange}
        onSubmit={onSubmitHandler}
      />
      <AuthModal {...modal} checkHandler={modalCloseHandler} />
    </>
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
