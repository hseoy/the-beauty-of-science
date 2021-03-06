import React from 'react';
import { Route } from 'react-router-dom';
import About from 'pages/About';
import Home from 'pages/Home';
import Navigation from 'components/Navigation';
import Header from 'components/Header';
import Footer from 'components/Footer';

const App = () => {
  return (
    <>
      <Header />
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
