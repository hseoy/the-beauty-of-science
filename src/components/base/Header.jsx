import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import LinkButton from 'components/common/LinkButton';
import { useTranslation } from 'react-i18next';
import { NAV_ITEMS } from '../../lib/constants';
import HeaderTitle from './HeaderTitle';
import HeaderUser from './HeaderUser';
import HeaderNav from './HeaderNav';

const Header = () => {
  const { user, avatar } = useSelector(state => ({
    user: state.user.user,
    avatar: state.user.avatar,
  }));
  const { t } = useTranslation();
  const translatedNavItems = NAV_ITEMS.map(item => ({
    ...item,
    title: t(`nav.${item.title.toLowerCase()}`),
    subitems: item.subitems.map(subitem => ({
      ...subitem,
      title: t(`${item.title.toLowerCase()}.${subitem.title.toLowerCase()}`),
    })),
  }));

  return (
    <HeaderBlock>
      <div className="inner">
        <HeaderTitle maintitle={t('maintitle')} subtitle={t('subtitle')} />
        {user ? (
          <RightTop>
            <LinkButton to="/profile">
              <HeaderUser user={user} avatar={avatar} />
            </LinkButton>
          </RightTop>
        ) : (
          <RightTop>
            <LinkButton to="/signin">{t('signin.signin')}</LinkButton>
            <LinkButton to="/signup">{t('signup.signup')}</LinkButton>
          </RightTop>
        )}
        <HeaderNav nav={translatedNavItems} />
      </div>
    </HeaderBlock>
  );
};

const HeaderBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  text-align: center;

  > .inner {
    width: 80%;
    padding-top: 5rem;
    margin: 0 auto;
  }
`;

const RightTop = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.625rem 1.25rem 0 0;
`;

export default Header;
