import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import zIndexes from 'lib/styles/zIndexes';

const Overlay = ({ children, visible, animation }) => {
  return (
    <OverlayBlock $visible={visible} $animation={animation}>
      <div className="inner">{children}</div>
    </OverlayBlock>
  );
};

Overlay.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  visible: PropTypes.bool,
  animation: PropTypes.bool,
};

Overlay.defaultProps = {
  visible: false,
  animation: true,
};

const OverlayBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000000b3;
  width: 100%;
  height: ${props => (props.$visible ? '100%' : '0%')};
  z-index: ${zIndexes.Overlay};

  ${({ $animation }) =>
    $animation &&
    css`
      transition: 0.6s;
    `}

  .inner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${props => (props.$visible ? '100%' : '0%')};
    z-index: ${zIndexes.OverlayInner};
    overflow: hidden;

    ${({ $animation }) =>
      $animation &&
      css`
        transition: 0.6s;
      `}
  }
`;

export default Overlay;
