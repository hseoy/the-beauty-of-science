import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import SignLinkGroup from './SignLinkGroup';
import Title from './Title';
import UserProfile from './UserProfile';
import S from './style';

const navItems = [
  {
    id: 1,
    title: 'Category',
    to: '#',
    subitems: [
      { id: 1, title: 'Common', to: '#' },
      { id: 2, title: 'Physics', to: '#' },
      { id: 3, title: 'Chemistry', to: '#' },
      { id: 4, title: 'Geoscience', to: '#' },
      { id: 5, title: 'Biology', to: '#' },
    ],
  },
  {
    id: 2,
    title: 'Rank',
    to: '#',
    subitems: [],
  },
  {
    id: 3,
    title: 'Quiz',
    to: '#',
    subitems: [],
  },
];

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
        <Navigation navItemList={navItems} />
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
