import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useUser from 'lib/hooks/useUser';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const user = useUser();
  const render = props =>
    user && restricted ? <Redirect to="/" /> : <Component {...props} />;
  return <Route {...rest} render={render} />;
};

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  restricted: PropTypes.bool,
};

PublicRoute.defaultProps = {
  restricted: false,
};

export default PublicRoute;
