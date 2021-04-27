import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexLayout = ({ children, direction, padding, margin }) => {
  return (
    <FlexLayoutBlock $padding={padding} $direction={direction} $margin={margin}>
      {children}
    </FlexLayoutBlock>
  );
};

FlexLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  direction: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
};

FlexLayout.defaultProps = {
  children: null,
  direction: '',
  padding: '',
  margin: '',
};

const FlexLayoutBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.$direction || 'none'};
  padding: ${props => props.$padding || '0'};
  margin: ${props => props.$margin || '0'};
`;

export default FlexLayout;
