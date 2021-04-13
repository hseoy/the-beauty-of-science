import React from 'react';
import PropTypes from 'prop-types';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import styled from 'styled-components';
import MdPreview from './MdPreview';

const MdEditor = ({ onChange, mdText }) => {
  const onChangeHandler = e => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <ScrollSync>
      <MdEditorBlock>
        <ScrollSync>
          <textarea
            className="md-input"
            value={mdText}
            onChange={onChangeHandler}
          />
        </ScrollSync>
        <ScrollSyncPane>
          <MdPreview mdText={mdText} width="50%" />
        </ScrollSyncPane>
      </MdEditorBlock>
    </ScrollSync>
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
    height: 100%;
    resize: none;
    padding: 20px;
    border: 2px solid ${({ theme }) => theme.colors.accentColor || '#000'};
    border-right: none;
  }
`;

export default MdEditor;
