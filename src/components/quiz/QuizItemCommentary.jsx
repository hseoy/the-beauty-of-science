import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/common/Button';

const QuizItemCommentary = ({ children, onClickTryAgain }) => {
  const onClickTryAgainHandler = e => {
    if (onClickTryAgain) {
      onClickTryAgain(e);
    }
  };
  return (
    <QuizItemCommentaryBlock>
      <div className="commentary">{children || 'There are no commentary'}</div>
      <div className="retry-button">
        <Button onClick={onClickTryAgainHandler}>Try again</Button>
      </div>
    </QuizItemCommentaryBlock>
  );
};

QuizItemCommentary.propTypes = {
  children: PropTypes.string,
  onClickTryAgain: PropTypes.func,
};

QuizItemCommentary.defaultProps = {
  children: '',
  onClickTryAgain: null,
};

const QuizItemCommentaryBlock = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > .commentary {
    word-break: break-all;
    overflow-y: auto;
    height: calc(100% - 60px);
    font-family: ${({ theme }) => theme.font.family.base || 'sans-seif'};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > .retry-button {
    margin-top: auto;
    padding: 10px 0;
  }
`;

export default QuizItemCommentary;
