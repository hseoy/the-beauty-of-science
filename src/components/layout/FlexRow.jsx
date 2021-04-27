import React from 'react';
import PropTypes from 'prop-types';
import FlexLayout from './FlexLayout';

const FlexRow = ({ children, padding, margin }) => {
  return (
    <FlexLayout padding={padding} direction="row" margin={margin}>
      {children}
    </FlexLayout>
  );
};

FlexRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  padding: PropTypes.string,
  margin: PropTypes.string,
};

FlexRow.defaultProps = {
  children: null,
  padding: '',
  margin: '',
};

export default FlexRow;
