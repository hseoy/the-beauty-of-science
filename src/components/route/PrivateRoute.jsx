import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useUser from 'lib/hooks/useUser';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useUser();
  const render = props =>
    user ? <Component {...props} /> : <Redirect to="/" />;
  return <Route {...rest} render={render} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
