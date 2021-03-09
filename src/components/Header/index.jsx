import React from 'react';
import PropTypes from 'prop-types';
import * as constants from 'myconstants';
import Navigation from './Navigation';
import SignLinkGroup from './SignLinkGroup';
import Title from './Title';
import UserProfile from './UserProfile';
import S from './style';

const Header = ({ isSigned, user }) => {
  return (
    <S.Wrap>
      <S.ContentWrap>
        <Title
          maintitle="The Beauty of Science"
          subtitle="Discuss the beauty of science"
        />
        {!isSigned && <SignLinkGroup />}
        {isSigned && <UserProfile user={user} />}
        <Navigation navItemList={constants.NAV_ITEMS} />
      </S.ContentWrap>
    </S.Wrap>
  );
};

Header.propTypes = {
  isSigned: PropTypes.bool,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    userid: PropTypes.string.isRequired,
    profileImage: PropTypes.string.isRequired,
  }),
};

Header.defaultProps = {
  isSigned: false,
  user: {
    username: '',
    userid: '',
    profileImage: '',
  },
};

export default Header;
