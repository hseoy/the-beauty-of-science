import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/common/Button';
import LinkButton from 'components/common/LinkButton';
import { useTranslation } from 'react-i18next';
import AuthInput from './AuthInput';

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const { t } = useTranslation('translation', { useSuspense: false });

  return (
    <AuthFormBlock>
      <form onSubmit={onSubmit}>
        {type === 'signup' && (
          <AuthInput
            title={t('inputTitle.name')}
            type="text"
            name="username"
            placeholder={t('placeholder.name')}
            onChange={onChange}
            value={form.username}
          />
        )}
        <AuthInput
          title={t('inputTitle.email')}
          type="email"
          name="email"
          placeholder={t('placeholder.email')}
          onChange={onChange}
          value={form.email}
        />
        <AuthInput
          title={t('inputTitle.password')}
          type="password"
          name="password"
          placeholder={t('placeholder.password')}
          onChange={onChange}
          value={form.password}
        />
        {type === 'signup' && (
          <AuthInput
            title={t('inputTitle.passwordConfirm')}
            type="password"
            name="passwordConfirm"
            placeholder={t('placeholder.passwordConfirm')}
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <Button fullwidth hover={false} reverse type="submit">
          {t(`${type}.${type}`)}
        </Button>
      </form>
      <Footer>
        {type === 'signup' ? (
          <RoundLinkButton to="/signin">{t('signin.signin')}</RoundLinkButton>
        ) : (
          <RoundLinkButton to="/signup">{t('signup.signup')}</RoundLinkButton>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

AuthForm.propTypes = {
  type: PropTypes.string,
  form: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    passwordConfirm: PropTypes.string,
  }),
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

AuthForm.defaultProps = {
  type: 'signup',
  form: {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  },
  onChange: null,
  onSubmit: null,
};

const AuthFormBlock = styled.div`
  width: 25rem;
  margin: 0 auto;
`;

const Footer = styled.footer`
  padding: 1.5rem 0;
  text-align: right;
`;

const RoundLinkButton = styled(LinkButton)`
  border-radius: 2rem;
  padding: 0.25rem 0.8rem;
`;

export default AuthForm;
