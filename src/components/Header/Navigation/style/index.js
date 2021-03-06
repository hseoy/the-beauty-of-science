import styled from 'styled-components';

const Wrap = styled.nav`
  display: block;
  padding: 10px 0px;

  a:hover {
    text-decoration: none;
  }
`;

const NavItems = styled.div`
  padding: 20x;
`;

export { Wrap };
export { NavItems };

export default {
  Wrap,
  NavItems,
};
