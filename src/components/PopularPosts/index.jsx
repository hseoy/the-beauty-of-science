import React, { useState } from 'react';
import SlideCube from 'components/SlideCube';
import PostCard from 'components/PostCard';
import S from './style';

const PopularPosts = () => {
  const [currentFace, setCurrentFace] = useState(0);
  const faces = ['face', 'right', 'back', 'left'];

  const nextSlide = () => {
    setCurrentFace((currentFace + 1) % 4);
  };

  const prevSlide = () => {
    setCurrentFace(currentFace - 1 >= 0 ? currentFace - 1 : 4);
  };

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
    <S.Wrap>
      <S.TitleWrap>
        <S.Title>Popular Post</S.Title>
        <span>|</span>
        <S.SubTitle>You are gonna love this.</S.SubTitle>
      </S.TitleWrap>

      <S.PostsWrap>
        <SlideCube
          face={faces[currentFace]}
          frontElement={item}
          rightElement={item}
          backElement={item}
          leftElement={item}
        />
        <S.PrevButton onClick={prevSlide}>&#10094;</S.PrevButton>
        <S.NextButton onClick={nextSlide}>&#10095;</S.NextButton>
      </S.PostsWrap>

      <S.DotsWrap>
        <S.Dot active={currentFace === 0} />
        <S.Dot active={currentFace === 1} />
        <S.Dot active={currentFace === 2} />
        <S.Dot active={currentFace === 3} />
      </S.DotsWrap>
    </S.Wrap>
  );
};

export default PopularPosts;
