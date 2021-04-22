import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/common/Button';
import LinkButton from 'components/common/LinkButton';
import { useTranslation } from 'react-i18next';
import AuthInput from './AuthInput';

const AuthForm = ({ type }) => {
  const { t } = useTranslation('translation', { useSuspense: false });

  return (
    <AuthFormBlock>
      <div className="body">
        {type === 'signup' && (
          <AuthInput
            title={t('inputTitle.name')}
            type="text"
            name="username"
            placeholder={t('placeholder.name')}
          />
        )}
        <AuthInput
          title={t('inputTitle.email')}
          type="email"
          name="email"
          placeholder={t('placeholder.email')}
        />
        <AuthInput
          title={t('inputTitle.password')}
          type="password"
          name="password"
          placeholder={t('placeholder.password')}
        />
        {type === 'signup' && (
          <AuthInput
            title={t('inputTitle.passwordConfirm')}
            type="password"
            name="passwordConfirm"
            placeholder={t('placeholder.passwordConfirm')}
          />
        )}
        <Button fullwidth hover={false} reverse>
          {t(type)}
        </Button>
      </div>
      <Footer>
        {type === 'signup' ? (
          <RoundLinkButton to="/signin">{t('signin')}</RoundLinkButton>
        ) : (
          <RoundLinkButton to="/signup">{t('signup')}</RoundLinkButton>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

AuthForm.propTypes = {
  type: PropTypes.string,
};

AuthForm.defaultProps = {
  type: 'signup',
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
