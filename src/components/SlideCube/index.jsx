import React from 'react';
import PropTypes from 'prop-types';
import S from './style';

const SlideCube = ({
  face,
  frontElement,
  rightElement,
  backElement,
  leftElement,
}) => {
  return (
    <S.Scene>
      <S.Cube
        front={face === 'front'}
        right={face === 'right'}
        back={face === 'back'}
        left={face === 'left'}
      >
        <S.CubeFace front>{frontElement}</S.CubeFace>
        <S.CubeFace right>{rightElement}</S.CubeFace>
        <S.CubeFace back>{backElement}</S.CubeFace>
        <S.CubeFace left>{leftElement}</S.CubeFace>
      </S.Cube>
    </S.Scene>
  );
};

SlideCube.propTypes = {
  face: PropTypes.string,
  frontElement: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  rightElement: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  backElement: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  leftElement: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

SlideCube.defaultProps = {
  face: 'front',
  frontElement: 'Front',
  rightElement: 'Right',
  backElement: 'Back',
  leftElement: 'Left',
};

export default SlideCube;
