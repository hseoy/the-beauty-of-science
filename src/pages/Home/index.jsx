import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <h2>Home</h2>
      <Footer
        author="Yunseo Hwang"
        homepage="https://github.com/hseoy/the-beauty-of-science"
      />
    </div>
  );
};

export default Home;
