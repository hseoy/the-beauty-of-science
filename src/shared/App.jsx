import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from 'pages/HomePage';
import SignupPage from 'pages/SignupPage';
import SigninPage from 'pages/SigninPage';
import ProfilePage from 'pages/ProfilePage';
import { refreshToken } from 'modules/auth';
import { setUser, setAvatar } from 'modules/user';
import Loader from 'components/common/Loader';
import PublicRoute from 'components/route/PublicRoute';
import PrivateRoute from 'components/route/PrivateRoute';

const App = () => {
  const [initLoaded, setInitLoaded] = useState(false);
  const dispatch = useDispatch();
  const {
    refresh,
    refreshError,
    user,
    avatar,
    setUserError,
    setAvatarError,
  } = useSelector(state => ({
    refresh: state.auth.refresh,
    refreshError: state.auth.refreshError,
    user: state.user.user,
    avatar: state.user.avatar,
    setUserError: state.user.setUserError,
    setAvatarError: state.user.setAvatarError,
  }));

  useEffect(() => {
    dispatch(refreshToken());
  }, []);

  useEffect(() => {
    if (refresh) {
      dispatch(setAvatar());
      dispatch(setUser());
    }
    if (refreshError) {
      setInitLoaded(true);
    }
  }, [refresh, refreshError]);

  useEffect(() => {
    if (user || setUserError || avatar || setAvatarError) {
      setInitLoaded(true);
    }
  }, [user, avatar, setUserError, setAvatarError]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <PublicRoute exact path="/" component={HomePage} />
        <PrivateRoute exact path="/profile" component={ProfilePage} />
        <PublicRoute restricted exact path="/signin" component={SigninPage} />
        <PublicRoute restricted exact path="/signup" component={SignupPage} />
      </Suspense>
      {!initLoaded && <Loader />}
    </>
  );
};

export default App;
