import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

const LinkButton = ({
  to,
  transition,
  fontSize,
  borderRadius,
  fullwidth,
  reverse,
  hover,
  padding,
  children,
  ...rest
}) => (
  <Button
    as={Link}
    to={to}
    transition={transition}
    fontSize={fontSize}
    borderRadius={borderRadius}
    fullwidth={fullwidth}
    reverse={reverse}
    hover={hover}
    padding={padding}
    {...rest}
  />
);

LinkButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  transition: PropTypes.string,
  fontSize: PropTypes.string,
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
  fullwidth: PropTypes.bool,
  reverse: PropTypes.bool,
  hover: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

LinkButton.defaultProps = {
  children: null,
  transition: '',
  fontSize: '',
  borderRadius: '',
  padding: '',
  fullwidth: false,
  reverse: false,
  hover: true,
};

export default LinkButton;
