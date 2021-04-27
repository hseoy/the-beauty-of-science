import React from 'react';
import PopularPosts from 'container/home/PopularPostsContainer';
import UserPodium from 'container/home/UserPodiumContainer';
import TodayQuiz from 'container/home/TodayQuizContainer';
import PageTemplate from 'components/base/PageTemplate';
import FlexColumn from 'components/layout/FlexColumn';
import FlexRow from 'components/layout/FlexRow';

const HomePage = () => {
  return (
    <PageTemplate contentPadding="40px 40px 50px 40px">
      <FlexColumn>
        <FlexRow>
          <PopularPosts />
        </FlexRow>
        <FlexRow>
          <UserPodium />
          <TodayQuiz />
        </FlexRow>
      </FlexColumn>
    </PageTemplate>
  );
};

export default HomePage;
