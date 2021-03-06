import React from 'react';
import PropTypes from 'prop-types';
import S from './style';
import NavItem from './NavItem';

const Navigation = ({ navItemList }) => {
  const navItems = navItemList.map(item => {
    return <NavItem item={item} key={item.id} />;
  });

  return (
    <S.Wrap>
      <S.NavItems>{navItems}</S.NavItems>
    </S.Wrap>
  );
};

Navigation.propTypes = {
  navItemList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Navigation;
