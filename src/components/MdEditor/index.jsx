import React from 'react';
import PropTypes from 'prop-types';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import MdPreview from './MdPreveiw';
import S from './style';

const MdEditor = ({ valueChangeHandler, mdText }) => {
  const inputChangeHandler = event => {
    const { value } = event.target;
    if (valueChangeHandler) {
      valueChangeHandler(value);
    }
  };

  return (
    <ScrollSync>
      <S.Wrap>
        <ScrollSyncPane>
          <S.MdInput value={mdText} onChange={inputChangeHandler} />
        </ScrollSyncPane>
        <ScrollSyncPane>
          <MdPreview mdText={mdText} />
        </ScrollSyncPane>
      </S.Wrap>
    </ScrollSync>
  );
};

MdEditor.propTypes = {
  valueChangeHandler: PropTypes.func,
  mdText: PropTypes.string,
};

MdEditor.defaultProps = {
  valueChangeHandler: null,
  mdText: '# Hello Everyone',
};

export default MdEditor;
