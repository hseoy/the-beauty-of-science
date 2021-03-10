import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Footer from 'components/Footer';
import PopularPosts from 'components/PopularPosts';

const Home = ({ isSigned }) => {
  return (
    <div>
      <Header isSigned={isSigned} />
      <h2>Home</h2>
      <PopularPosts />
      <Footer
        author="Yunseo Hwang"
        homepage="https://github.com/hseoy/the-beauty-of-science"
      />
    </div>
  );
};

Home.propTypes = {
  isSigned: PropTypes.bool,
};

Home.defaultProps = {
  isSigned: false,
};

export default Home;
