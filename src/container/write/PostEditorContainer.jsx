import React, { useEffect } from 'react';
import { setPost, initializePost } from 'modules/write';
import { useDispatch, useSelector } from 'react-redux';
import PostEditor from 'components/write/PostEditor';

const PostEditorContainer = () => {
  const dispatch = useDispatch();
  const { post } = useSelector(state => ({ post: state.write.post }));
  const onChange = ({ title, content, category }) => {
    dispatch(setPost({ title, content, category }));
  };

  useEffect(() => {
    dispatch(initializePost());
  }, []);

  return <PostEditor post={post} onChange={onChange} />;
};

export default PostEditorContainer;
