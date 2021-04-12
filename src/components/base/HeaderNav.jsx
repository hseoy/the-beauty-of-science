import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeaderNavItem from './HeaderNavItem';

const HeaderNav = ({ nav }) => {
  const navItems = nav.map(item => {
    return <HeaderNavItem item={item} key={item.id} />;
  });

  return (
    <HeaderNavBlock>
      <div className="inner">{navItems}</div>
    </HeaderNavBlock>
  );
};

HeaderNav.propTypes = {
  nav: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const HeaderNavBlock = styled.nav`
  display: block;
  padding: 10px 0px;

  > .inner {
    padding: 20px;
  }
`;

export default HeaderNav;
