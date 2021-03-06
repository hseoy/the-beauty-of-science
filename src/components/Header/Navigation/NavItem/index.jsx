import React from 'react';
import PropTypes from 'prop-types';
import S from './style';

const NavItem = ({ item }) => {
  const subItems = item.subitems.map(subItem => (
    <S.NavSubItemLink to={subItem.to} key={subItem.id}>
      {subItem.title}
    </S.NavSubItemLink>
  ));

  return (
    <S.NavItemWrap subItemCount={subItems.length}>
      <S.NavItemLink to={item.to}>{item.title}</S.NavItemLink>
      {item.subitems.length > 0 && (
        <S.NavSubItemWrap>{subItems}</S.NavSubItemWrap>
      )}
    </S.NavItemWrap>
  );
};

NavItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    subitems: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default NavItem;
