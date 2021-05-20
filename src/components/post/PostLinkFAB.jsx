import React from 'react';
import FloatingActionButton from 'components/common/FloatingActionButton';
import { HiPencilAlt } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const PostLinkFAB = () => {
  return (
    <Link to="/edit/post" title="Write a Post">
      <FloatingActionButton
        fontSize="2rem"
        width="50px"
        height="50px"
        bottom="30%"
        right="140px"
      >
        <HiPencilAlt />
      </FloatingActionButton>
    </Link>
  );
};

export default PostLinkFAB;
