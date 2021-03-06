import React from 'react';
import PropTypes from 'prop-types';
import S from './style';

const EditorTriggerButton = ({
  children,
  onClickHandler,
  hiddenTitle,
  left,
  right,
}) => {
  return (
    <S.Button onClick={onClickHandler} left={left} right={right}>
      <S.ButtonContent hiddenTitle={hiddenTitle}>{children}</S.ButtonContent>
    </S.Button>
  );
};

EditorTriggerButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
  hiddenTitle: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
};

EditorTriggerButton.defaultProps = {
  hiddenTitle: '',
  onClickHandler: () => {},
  left: false,
  right: false,
};

export default EditorTriggerButton;
