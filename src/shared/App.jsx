import React from 'react';
import { Route } from 'react-router-dom';
import Home from 'pages/Home';

const App = () => {
  const isSigned = false;
  return (
    <>
      <Route exact path="/" render={() => <Home isSigned={isSigned} />} />
    </>
  );
};

export default App;
