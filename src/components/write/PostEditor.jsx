import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'components/common/Select';
import { CATEGORIES } from 'lib/constants';
import { useTranslation } from 'react-i18next';
import Editor from './Editor';
import MdEditor from './MdEditor';

const PostEditor = ({ post, onChange }) => {
  const { t, i18n } = useTranslation('translation', { useSuspense: false });

  const categories = useMemo(
    () =>
      CATEGORIES.map(c => ({
        value: c.title.toLowerCase(),
        label: t(`category.${c.title.toLowerCase()}`),
      })),
    [i18n.language],
  );

  const postCategory = useMemo(
    () => categories.filter(category => category.value === post.category)[0],
    [categories, post.category],
  );

  const onChangeHandler = name => e => {
    if (onChange) {
      onChange({ ...post, [name]: e.target.value });
    }
  };

  const onChangeCategory = value => {
    if (onChange) {
      onChange({ ...post, category: value });
    }
  };

  return (
    <Editor
      button={`${t('common.submit')} - ${t(`category.${post.category}`)}`}
    >
      <PostEditorBlock>
        <Select
          options={categories}
          value={postCategory}
          onChange={onChangeCategory}
          width="10rem"
        />
        <div className="title">
          <input
            type="text"
            className="title-input"
            value={post.title}
            onChange={onChangeHandler('title')}
          />
        </div>
        <div className="md-editor">
          <MdEditor
            mdText={post.content}
            onChange={onChangeHandler('content')}
          />
        </div>
      </PostEditorBlock>
    </Editor>
  );
};

PostEditor.propTypes = {
  post: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func,
};

PostEditor.defaultProps = {
  post: {
    category: 'common',
    title: "# Hello 'The Beauty of Science'",
    content: "# Hello 'The Beauty of Science'",
  },
  onChange: null,
};

const PostEditorBlock = styled.div`
  > .title {
    font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
    font-size: 28px;
    padding: 10px;
    display: flex;

    &::before {
      content: 'Title:';
      padding-right: 24px;
    }

    > .title-input {
      outline: none;
      border: none;
      font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
      font-size: 28px;
      display: block;
      width: 100%;
      border-bottom: 3px solid
        ${({ theme }) => theme.colors.accentColor || '#000'};
    }
  }
  > .md-editor {
    height: calc(100% - 206px);
  }
`;

export default PostEditor;
