import React from 'react';
import { Route } from 'react-router-dom';
import Home from 'pages/Home';
import SignupPage from 'pages/SignupPage';
import SigninPage from 'pages/SigninPage';

const App = () => {
  const isSigned = false;
  return (
    <>
      <Route exact path="/" render={() => <Home isSigned={isSigned} />} />
      <Route exact path="/signin" component={SigninPage} />
      <Route exact path="/signup" component={SignupPage} />
    </>
  );
};

export default App;
