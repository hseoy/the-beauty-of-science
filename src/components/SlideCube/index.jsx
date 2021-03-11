import React from 'react';
import PropTypes from 'prop-types';
import S from './style';

const SlideCube = ({ children, index, size }) => {
  let cubeFaces = [];
  const emptyFace = id => <S.CubeFaceEmpty key={id}>Empty</S.CubeFaceEmpty>;

  if (children) {
    cubeFaces = Array.isArray(children)
      ? [...children].slice(0, 4)
      : [children];
  }

  for (let i = 0; cubeFaces.length < 4; i += 1) {
    cubeFaces.push(emptyFace(i));
  }

  return (
    <S.Scene size={size}>
      <S.Cube
        front={index === 'front'}
        right={index === 'right'}
        back={index === 'back'}
        left={index === 'left'}
        size={size}
      >
        <S.CubeFace front size={size}>
          {cubeFaces[0]}
        </S.CubeFace>
        <S.CubeFace right size={size}>
          {cubeFaces[1]}
        </S.CubeFace>
        <S.CubeFace back size={size}>
          {cubeFaces[2]}
        </S.CubeFace>
        <S.CubeFace left size={size}>
          {cubeFaces[3]}
        </S.CubeFace>
      </S.Cube>
    </S.Scene>
  );
};

SlideCube.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  index: PropTypes.string,
  size: PropTypes.number,
};

SlideCube.defaultProps = {
  children: undefined,
  index: 'front',
  size: 500,
};

export default SlideCube;
