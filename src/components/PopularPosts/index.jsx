import React from 'react';
import HomeElement from 'components/HomeElement';
import PostCard from 'components/PostCard';
import Rect3dSlider from 'components/Rect3dSlider';

const PopularPosts = () => {
  const author = {
    name: 'Yunseo Hwang',
    level: 'Level 1',
  };

  const item = (
    <PostCard
      thumbnailImage="https://i.pinimg.com/originals/84/12/71/8412715b792dc8e26f384ce8d26e8304.jpg"
      date="2021.03.10"
      title="BLABLABLABLABLABLABLABLABLABLABLABLABLA"
      author={author}
    />
  );

  return (
    <HomeElement
      title="Popular Post"
      subtitle="You are gonna love this"
      width="100%"
    >
      <Rect3dSlider size={810} height={330} useDots>
        <>
          {item}
          {item}
          {item}
        </>

        <>
          {item}
          {item}
          {item}
        </>

        <>
          {item}
          {item}
          {item}
        </>

        <>
          {item}
          {item}
          {item}
        </>
      </Rect3dSlider>
    </HomeElement>
  );
};

export default PopularPosts;
