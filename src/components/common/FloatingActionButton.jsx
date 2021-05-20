import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import zIndexes from 'lib/styles/zIndexes';
import Button from './Button';

const FloatingActionButton = ({
  children,
  fontSize,
  borderRadius,
  width,
  height,
  top,
  right,
  left,
  bottom,
  ...rest
}) => {
  return (
    <StyledFAB
      padding="0.5rem"
      fontSize={fontSize}
      borderRadius={borderRadius}
      $width={width}
      $height={height}
      $top={top}
      $right={right}
      $left={left}
      $bottom={bottom}
      {...rest}
    >
      {children}
    </StyledFAB>
  );
};

FloatingActionButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fontSize: PropTypes.string,
  borderRadius: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  top: PropTypes.string,
  right: PropTypes.string,
  left: PropTypes.string,
  bottom: PropTypes.string,
};

FloatingActionButton.defaultProps = {
  children: null,
  fontSize: '1.5rem',
  borderRadius: '50%',
  width: '',
  height: '',
  top: '',
  right: '',
  left: '',
  bottom: '',
};

const StyledFAB = styled(Button)`
  display: 'flex';
  width: ${props => props.$width || 'auto'};
  height: ${props => props.$height || 'auto'};
  z-index: ${zIndexes.FloatingActionButton};
  position: fixed;
  top: ${props => props.$top || 'auto'};
  right: ${props => props.$right || 'auto'};
  left: ${props => props.$left || 'auto'};
  bottom: ${props => props.$bottom || 'auto'};
`;

export default FloatingActionButton;
