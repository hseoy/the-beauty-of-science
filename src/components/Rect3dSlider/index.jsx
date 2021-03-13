import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Rect from 'react-3d-rect';
import S from './style';

const Rect3dSlider = ({ children, size, height, useDots }) => {
  let rectFaces = [];

  if (children) {
    rectFaces = Array.isArray(children)
      ? [...children].slice(0, 4)
      : [children];
  }

  const [currentFace, setCurrentFace] = useState(0);
  const faces = ['face', 'right', 'back', 'left'];

  const nextSlide = () => {
    setCurrentFace((currentFace + 1) % 4);
  };

  const prevSlide = () => {
    setCurrentFace(currentFace - 1 >= 0 ? currentFace - 1 : 3);
  };

  const setSlideIndex = num => () => {
    setCurrentFace(num % 4);
  };

  return (
    <>
      <S.Slider height={height}>
        <Rect index={faces[currentFace]} size={size}>
          {rectFaces[0]}
          {rectFaces[1]}
          {rectFaces[2]}
          {rectFaces[3]}
        </Rect>
        <S.PrevButton onClick={prevSlide}>&#10094;</S.PrevButton>
        <S.NextButton onClick={nextSlide}>&#10095;</S.NextButton>
      </S.Slider>
      {useDots && (
        <S.DotsWrap>
          <S.Dot active={currentFace === 0} onClick={setSlideIndex(0)} />
          <S.Dot active={currentFace === 1} onClick={setSlideIndex(1)} />
          <S.Dot active={currentFace === 2} onClick={setSlideIndex(2)} />
          <S.Dot active={currentFace === 3} onClick={setSlideIndex(3)} />
        </S.DotsWrap>
      )}
    </>
  );
};

Rect3dSlider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  size: PropTypes.number,
  height: PropTypes.number,
  useDots: PropTypes.bool,
};

Rect3dSlider.defaultProps = {
  children: [],
  size: 500,
  height: 500,
  useDots: true,
};

export default Rect3dSlider;
