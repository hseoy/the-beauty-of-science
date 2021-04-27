import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const QuizItemAnswers = ({ answerList, onAnswerClick }) => {
  const { t } = useTranslation();
  const answers = [...answerList];

  const answerClickHandler = num => () => {
    if (onAnswerClick) {
      onAnswerClick(num);
    }
  };

  return (
    <QuizItemAnswersBlock>
      {answers[0] || answers[1] || answers[2] || answers[3] ? (
        <>
          {answers[0] && (
            <QuizItemAnswer onClick={answerClickHandler(1)}>
              {answers[0]}
            </QuizItemAnswer>
          )}
          {answers[1] && (
            <QuizItemAnswer onClick={answerClickHandler(2)}>
              {answers[1]}
            </QuizItemAnswer>
          )}
          {answers[2] && (
            <QuizItemAnswer onClick={answerClickHandler(3)}>
              {answers[2]}
            </QuizItemAnswer>
          )}
          {answers[3] && (
            <QuizItemAnswer onClick={answerClickHandler(4)}>
              {answers[3]}
            </QuizItemAnswer>
          )}
        </>
      ) : (
        <div className="no-choice">{t('noChoice')}</div>
      )}
    </QuizItemAnswersBlock>
  );
};

QuizItemAnswers.propTypes = {
  answerList: PropTypes.arrayOf(PropTypes.string),
  onAnswerClick: PropTypes.func,
};

QuizItemAnswers.defaultProps = {
  answerList: [],
  onAnswerClick: null,
};

const QuizItemAnswersBlock = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;

  > .no-choice {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

const QuizItemAnswer = styled.button`
  cursor: pointer;
  display: inline-block;
  width: calc(50% - 5px);
  height: calc(50% - 5px);
  overflow-y: auto;
  word-break: break-all;
  margin: 2.5px;
  background-color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
  border-radius: 20px;
  font-size: 20px;
  transition: background 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentColor || '#000'};
    color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
    ${props => props.theme.utils.selectionStyle(props.theme, true)}
  }
`;

export default QuizItemAnswers;
