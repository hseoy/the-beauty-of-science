import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/common/Button';

const QuizItemResult = ({ isRight, onClickTryAgain, onClickCommentary }) => {
  const onClickTryAgainHandler = e => {
    if (onClickTryAgain) {
      onClickTryAgain(e);
    }
  };
  const onClickCommentaryHandler = e => {
    if (onClickCommentary) {
      onClickCommentary(e);
    }
  };
  return (
    <QuizItemResultBlock>
      <h3 className="title">
        {isRight ? "That's right!" : "That's a wrong answer"}
      </h3>
      <div className="content">
        {isRight ? (
          <Button onClick={onClickCommentaryHandler}>
            Read the commentary
          </Button>
        ) : (
          <Button onClick={onClickTryAgainHandler}>Try again</Button>
        )}
      </div>
    </QuizItemResultBlock>
  );
};

QuizItemResult.propTypes = {
  isRight: PropTypes.bool,
  onClickTryAgain: PropTypes.func,
  onClickCommentary: PropTypes.func,
};

QuizItemResult.defaultProps = {
  isRight: false,
  onClickTryAgain: null,
  onClickCommentary: null,
};

const QuizItemResultBlock = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .title {
    font-family: ${({ theme }) => theme.font.family.accent || 'sans-serif'};
    padding-bottom: 1.25rem;
  }
`;

export default QuizItemResult;
