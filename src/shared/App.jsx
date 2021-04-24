import React from 'react';
import Home from 'pages/Home';
import SignupPage from 'pages/SignupPage';
import SigninPage from 'pages/SigninPage';
import PublicRoute from 'components/route/PublicRoute';
// import PrivateRoute from 'components/route/PrivateRoute';

const App = () => {
  return (
    <>
      <PublicRoute exact path="/" component={Home} />
      <PublicRoute restricted exact path="/signin" component={SigninPage} />
      <PublicRoute restricted exact path="/signup" component={SignupPage} />
    </>
  );
};

export default App;
