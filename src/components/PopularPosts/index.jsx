import React from 'react';
// import SlideCube from 'components/SlideCube';
import PostCard from 'components/PostCard';
import S from './style';

const PopularPosts = () => {
  const author = {
    name: 'Yunseo Hwang',
    level: 'Level 1',
  };

  return (
    <S.Wrap>
      {/* <SlideCube face="front" /> */}
      <PostCard
        thumbnailImage="https://i.pinimg.com/originals/84/12/71/8412715b792dc8e26f384ce8d26e8304.jpg"
        date="2021.03.10"
        title="BLABLABLABLABLABLABLABLABLABLABLABLABLA"
        author={author}
      />
    </S.Wrap>
  );
};

export default PopularPosts;
