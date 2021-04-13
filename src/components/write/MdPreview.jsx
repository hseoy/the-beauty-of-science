import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import styled from 'styled-components';
import PostView from 'components/post/PostView';

const MdPreview = ({ mdText, width }) => {
  return (
    <MdPreviewBlock $width={width}>
      <PostView>
        <ReactMarkdown plugins={[gfm]} source={mdText} />
      </PostView>
    </MdPreviewBlock>
  );
};

MdPreview.propTypes = {
  mdText: PropTypes.string,
  width: PropTypes.string,
};

MdPreview.defaultProps = {
  mdText: '# Hello World',
  width: '100%',
};

const MdPreviewBlock = styled.div`
  width: ${props => props.$width || '100%'};
  height: 100%;
  padding: 20px;
  overflow-y: auto;
  border: 2px solid ${({ theme }) => theme.colors.accentColor || '#000'};
`;

export default MdPreview;
