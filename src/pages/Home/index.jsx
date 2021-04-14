import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
// import PopularPosts from 'components/PopularPosts';
// import TopUserPodium from 'components/TopUserPodium';
// import TodayPopularQuiz from 'components/TodayPopularQuiz';
import * as S from './style';

const Home = ({ isSigned }) => {
  // const user = {
  //   userid: 'HELLO',
  //   username: 'Yunseo Hwang',
  //   avatar:
  //     'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
  // };
  const user = null;
  return (
    <>
      <Header user={user} isSigned={isSigned} />
      <S.ContentWrap>
        <S.Content>
          <S.Column>
            <S.Row>{/* <PopularPosts /> */}</S.Row>
            <S.Row>
              {/* <TopUserPodium />
              <TodayPopularQuiz signed={isSigned} /> */}
            </S.Row>
          </S.Column>
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
