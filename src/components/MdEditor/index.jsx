import React, { useState } from 'react';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import MdPreview from './MdPreveiw';
import S from './style';

const MdEditor = () => {
  const [mdText, setMdText] = useState("# Hello 'The Beauty of Science'");

  const inputChangeHandler = event => {
    const { value } = event.target;
    setMdText(value);
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

export default MdEditor;
