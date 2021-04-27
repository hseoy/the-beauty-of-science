import React from 'react';
import PropTypes from 'prop-types';
import FlexLayout from './FlexLayout';

const FlexColumn = ({ children, padding, margin }) => {
  return (
    <FlexLayout padding={padding} direction="column" margin={margin}>
      {children}
    </FlexLayout>
  );
};

FlexColumn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  padding: PropTypes.string,
  margin: PropTypes.string,
};

FlexColumn.defaultProps = {
  children: null,
  padding: '',
  margin: '',
};

export default FlexColumn;
