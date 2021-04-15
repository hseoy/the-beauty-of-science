import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LinkButton from 'components/common/LinkButton';
import { NAV_ITEMS } from '../../lib/constants';
import HeaderTitle from './HeaderTitle';
import HeaderUser from './HeaderUser';
import HeaderNav from './HeaderNav';

const Header = ({ user }) => {
  return (
    <HeaderBlock>
      <div className="inner">
        <HeaderTitle
          maintitle="The Beauty of Science"
          subtitle="Discuss the beauty of science"
        />
        {user ? (
          <RightTop>
            <LinkButton to="/profile">
              <HeaderUser user={user} />
            </LinkButton>
          </RightTop>
        ) : (
          <RightTop>
            <LinkButton to="/signin">Sign In</LinkButton>
            <LinkButton to="/signup">Sign Up</LinkButton>
          </RightTop>
        )}
        <HeaderNav nav={NAV_ITEMS} />
      </div>
    </HeaderBlock>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    userid: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};

Header.defaultProps = {
  user: null,
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
