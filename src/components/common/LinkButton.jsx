import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

const LinkButton = ({ transition, to, ...rest }) => (
  <Button transition={transition} as={Link} to={to} {...rest} />
);

LinkButton.propTypes = {
  transition: PropTypes.string,
  to: PropTypes.string.isRequired,
};

LinkButton.defaultProps = {
  transition: '',
};

export default LinkButton;
