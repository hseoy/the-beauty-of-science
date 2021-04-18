import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = ({ children, ...settings }) => {
  const sliderSettings = {
    dots: true,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...settings,
  };
  return (
    <SliderBlock>
      <SlickSlider {...sliderSettings}>{children}</SlickSlider>
    </SliderBlock>
  );
};

Slider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Slider.defaultProps = {
  children: null,
};

const SliderBlock = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100%;
  padding: 0 50px;
`;

export default Slider;
