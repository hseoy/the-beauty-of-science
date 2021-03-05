import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from 'components/Navigation';
import About from 'pages/About';
import Home from 'pages/Home';
import Footer from 'components/Footer';

const App = () => {
  return (
    <>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Footer
        author="Yunseo Hwang"
        homepage="https://github.com/hseoy/the-beauty-of-science"
      />
    </>
  );
};

export default App;
