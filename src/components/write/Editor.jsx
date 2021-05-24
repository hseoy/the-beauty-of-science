import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/common/Button';

const Editor = ({ children, button, clickHandler }) => {
  const onClickHandler = e => {
    if (clickHandler) {
      clickHandler(e);
    }
  };
  return (
    <EditorBlock>
      {children}
      <div className="upload-button">
        <Button onClick={onClickHandler}>{button}</Button>
      </div>
    </EditorBlock>
  );
};

Editor.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  button: PropTypes.string,
  clickHandler: PropTypes.func,
};

Editor.defaultProps = {
  children: '',
  button: 'Check',
  clickHandler: null,
};

const EditorBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  > .upload-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100px;
  }
`;

export default Editor;
