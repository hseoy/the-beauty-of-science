import React from 'react';
import { useSelector } from 'react-redux';
import QuizLinkFAB from 'components/quiz/QuizLinkFAB';
import PostLinkFAB from 'components/post/PostLinkFAB';
import PopularPosts from 'container/home/PopularPostsContainer';
import UserPodium from 'container/home/UserPodiumContainer';
import TodayQuiz from 'container/home/TodayQuizContainer';
import PageTemplate from 'components/base/PageTemplate';
import FlexColumn from 'components/layout/FlexColumn';
import FlexRow from 'components/layout/FlexRow';

const HomePage = () => {
  const { user } = useSelector(state => ({ user: state.user.user }));

  return (
    <>
      {user && (
        <>
          <PostLinkFAB />
          <QuizLinkFAB />
        </>
      )}
      <PageTemplate contentPadding="40px 40px 50px 40px">
        <FlexColumn>
          <FlexRow padding="0 0 50px 0">
            <PopularPosts />
          </FlexRow>
          <FlexRow padding="0 0 50px 0">
            <UserPodium />
            <TodayQuiz />
          </FlexRow>
        </FlexColumn>
      </PageTemplate>
    </>
  );
};

export default HomePage;
