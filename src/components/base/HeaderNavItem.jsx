import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import styled, { css, keyframes } from 'styled-components';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import useToggle from 'lib/hooks/useToggle';
import zIndexes from 'lib/styles/zIndexes';

const HeaderNavItem = ({ item }) => {
  const [init, setInit] = useState(false);
  const [subNav, toggleSubNav] = useToggle(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!subNav) return;
    setInit(true);
  }, [subNav]);

  const onOutsideClick = useCallback(
    e => {
      if (!subNav) return;
      if (!ref.current) return;
      if (ref.current.contains(e.target)) return;
      toggleSubNav();
    },
    [toggleSubNav],
  );

  const subItems = useMemo(
    () =>
      item.subitems.map(subItem => (
        <HeaderNavSubItemLink to={subItem.to} key={subItem.id}>
          {subItem.title}
        </HeaderNavSubItemLink>
      )),
    [item.subitems],
  );

  return (
    <HeaderNavItemBlock
      $subItemCount={subItems.length}
      $subItemVisible={subNav}
      $init={init}
      $zIndex={zIndexes.HeaderNavSubItem}
      onClick={toggleSubNav}
      ref={ref}
    >
      <OutsideClickHandler
        onOutsideClick={onOutsideClick}
        display="inline-block"
      >
        <HeaderNavItemLink to={item.to} $subItemVisible={subNav}>
          {item.title}
          {item.subitems.length > 0 &&
            (subNav ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />)}
        </HeaderNavItemLink>
      </OutsideClickHandler>
      {item.subitems.length > 0 && <div className="subitems">{subItems}</div>}
    </HeaderNavItemBlock>
  );
};

HeaderNavItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    subitems: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const openAnimation = subItemCount => keyframes`
  from {
    height: 0px;
  }

  to {
    height: ${`${subItemCount * 52 + 4}px` || 'auto'};
  }
`;

const closeAnimation = subItemCount => keyframes`
  from {
    height: ${`${subItemCount * 52 + 4}px` || 'auto'};
  }

  to {
    height: 0px;
  }
`;

const HeaderNavSubItemLink = styled(Link)`
  transition: 0.2s;
  height: 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.accentColor || '#000'};
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentColor || '#000'};
    color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
    text-decoration: none;
  }
  &:not(:last-child) {
    border-bottom: 2px solid
      ${({ theme }) => theme.colors.accentColor || '#000'};
  }
`;

const HeaderNavItemLink = styled(Link)`
  transition: 0.12s;
  font-size: 1.25rem;
  height: 2.1875rem;
  width: 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.accentColor || '#000'};
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};

  &:hover {
    text-decoration: none;
  }

  ${props =>
    props.$subItemVisible &&
    css`
      border-bottom: 3px solid
        ${({ theme }) => theme.colors.accentColor || '#000'};
    `}
`;

const HeaderNavItemBlock = styled.div`
  display: inline-block;
  position: relative;
  margin: 0 3.125rem;
  height: 2.1875rem;
  width: 7.5rem;

  > .subitems {
    overflow: hidden;
    position: absolute;
    box-sizing: border-box;
    left: 0;
    height: 0;
    width: 18.75rem;
    margin-left: -5.625rem;
    z-index: ${props => props.$zIndex || 0};
    background-color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
    border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
    opacity: 0;
    transition: 0.5s;

    ${props =>
      props.$subItemCount &&
      props.$init &&
      (props.$subItemVisible
        ? css`
            animation: ${openAnimation(props.$subItemCount)};
            animation-duration: 0.5s;
            animation-fill-mode: forwards;
            opacity: 1;
          `
        : css`
            animation: ${closeAnimation(props.$subItemCount)};
            animation-duration: 0.5s;
            animation-fill-mode: forwards;
            opacity: 0;
          `)}
  }

  &:hover {
    ${HeaderNavItemLink} {
      border-bottom: 3px solid
        ${({ theme }) => theme.colors.accentColor || '#000'};
    }
  }
`;

export default HeaderNavItem;
