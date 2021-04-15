import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MdPreview from './MdPreview';

const MdEditor = ({ onChange, mdText }) => {
  const onChangeHandler = e => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <MdEditorBlock>
      <textarea
        className="md-input"
        value={mdText}
        onChange={onChangeHandler}
      />
      <MdPreview mdText={mdText} width="50%" />
    </MdEditorBlock>
  );
};

MdEditor.propTypes = {
  onChange: PropTypes.func,
  mdText: PropTypes.string,
};

MdEditor.defaultProps = {
  onChange: null,
  mdText: '# Hello Everyone',
};

const MdEditorBlock = styled.div`
  height: 100%;
  position: relative;
  padding: 0 10px;
  display: flex;

  .md-input {
    width: 50%;
    resize: none;
    padding: 20px;
    border: 2px solid ${({ theme }) => theme.colors.accentColor || '#000'};
    border-right: none;
  }
`;

export default MdEditor;
