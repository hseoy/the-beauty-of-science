import React from 'react';
import { SiQuicktime } from 'react-icons/si';
import FloatingActionButton from 'components/common/FloatingActionButton';
import { Link } from 'react-router-dom';

const QuizLinkFAB = () => {
  return (
    <Link to="/edit/quiz" title="Create a Quiz">
      <FloatingActionButton
        fontSize="1.3rem"
        width="50px"
        height="50px"
        bottom="30%"
        right="70px"
      >
        <SiQuicktime />
      </FloatingActionButton>
    </Link>
  );
};

export default QuizLinkFAB;
