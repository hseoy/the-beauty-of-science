import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/common/Button';
import { useTranslation } from 'react-i18next';

const QuizItemResult = ({ isRight, onClickTryAgain, onClickCommentary }) => {
  const { t } = useTranslation();
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
        {isRight ? t('answer.right') : t('answer.wrong')}
      </h3>
      <div className="content">
        {isRight ? (
          <Button onClick={onClickCommentaryHandler}>
            {t('commentary.read')}
          </Button>
        ) : (
          <Button onClick={onClickTryAgainHandler}>
            {t('common.tryAgain')}
          </Button>
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
