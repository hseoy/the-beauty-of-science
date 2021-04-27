import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from 'pages/HomePage';
import SignupPage from 'pages/SignupPage';
import SigninPage from 'pages/SigninPage';
import PublicRoute from 'components/route/PublicRoute';
import { refresh } from 'modules/auth';
import { setUser, setAvatar } from 'modules/user';
import Loader from 'components/common/Loader';
// import PrivateRoute from 'components/route/PrivateRoute';

const App = () => {
  const [initLoaded, setInitLoaded] = useState(false);
  const dispatch = useDispatch();
  const {
    auth,
    refreshError,
    user,
    avatar,
    setUserError,
    setAvatarError,
  } = useSelector(state => ({
    auth: state.auth.auth,
    refreshError: state.auth.refreshError,
    user: state.user.user,
    avatar: state.user.avatar,
    setUserError: state.user.setUserError,
    setAvatarError: state.user.setAvatarError,
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
      setInitLoaded(true);
    }
  }, [auth, refreshError]);

  useEffect(() => {
    if (user || setUserError || avatar || setAvatarError) {
      setInitLoaded(true);
    }
  }, [user, avatar, setUserError, setAvatarError]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <PublicRoute exact path="/" component={HomePage} />
        <PublicRoute restricted exact path="/signin" component={SigninPage} />
        <PublicRoute restricted exact path="/signup" component={SignupPage} />
      </Suspense>
      {!initLoaded && <Loader />}
    </>
  );
};

export default App;
