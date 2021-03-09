import React from 'react';
import PropTypes from 'prop-types';
import S from './style';

const Overlay = ({ children, visible, animation }) => {
  return (
    <S.Wrap visible={visible} animation={animation}>
      <S.Overlay visible={visible} animation={animation} />
      {children}
    </S.Wrap>
  );
};

Overlay.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  visible: PropTypes.bool,
  animation: PropTypes.bool,
};

Overlay.defaultProps = {
  visible: false,
  animation: true,
};

export default Overlay;
