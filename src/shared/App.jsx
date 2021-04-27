import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from 'pages/Home';
import SignupPage from 'pages/SignupPage';
import SigninPage from 'pages/SigninPage';
import PublicRoute from 'components/route/PublicRoute';
import { refresh } from 'modules/auth';
import { setUser, setAvatar } from 'modules/user';
// import PrivateRoute from 'components/route/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  const { auth, refreshError } = useSelector(state => ({
    auth: state.auth.auth,
    refreshError: state.auth.refreshError,
  }));

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  useEffect(() => {
    if (auth) {
      dispatch(setAvatar());
      dispatch(setUser());
    }
    if (refreshError) {
      console.log('ERROR');
    }
  }, [auth, refreshError]);

  return (
    <>
      <PublicRoute exact path="/" component={Home} />
      <PublicRoute restricted exact path="/signin" component={SigninPage} />
      <PublicRoute restricted exact path="/signup" component={SignupPage} />
    </>
  );
};

export default App;
