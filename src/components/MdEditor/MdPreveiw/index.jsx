import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import S from './style';

const MdPreview = ({ mdText }) => {
  return (
    <S.MdPreview>
      <ReactMarkdown plugins={[gfm]} source={mdText} />
    </S.MdPreview>
  );
};

MdPreview.propTypes = {
  mdText: PropTypes.string,
};

MdPreview.defaultProps = {
  mdText: '# Hello World',
};

export default MdPreview;
