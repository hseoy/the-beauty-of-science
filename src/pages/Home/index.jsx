import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Footer from 'components/Footer';
import PopularPosts from 'components/PopularPosts';
import TopUserPodium from 'components/TopUserPodium';
import S from './style';

const Home = ({ isSigned }) => {
  return (
    <>
      <Header isSigned={isSigned} />

      <S.ContentWrap>
        <S.Content>
          <PopularPosts />
          <TopUserPodium />
        </S.Content>
      </S.ContentWrap>

      <Footer
        author="Yunseo Hwang"
        homepage="https://github.com/hseoy/the-beauty-of-science"
      />
    </>
  );
};

Home.propTypes = {
  isSigned: PropTypes.bool,
};

Home.defaultProps = {
  isSigned: false,
};

export default Home;
