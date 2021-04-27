import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NumberOptions from 'components/common/NumberOptions';
import { useTranslation } from 'react-i18next';
import Editor from './Editor';

const QuizEditor = ({ quiz, onChange }) => {
  const { t } = useTranslation();
  const quizAnswers = [...quiz.answers];

  while (quizAnswers.length < 4) {
    quizAnswers.push('');
  }

  const rightAnswerNums = quizAnswers
    .map((answer, i) => answer && i + 1)
    .filter(nums => nums);

  const onChangeHandler = name => e => {
    if (onChange) {
      onChange({
        ...quiz,
        answers: [...quiz.answers],
        [name]: e.target.value,
      });
    }
  };

  const onNumberChangeHandler = name => num => {
    if (onChange) {
      onChange({
        ...quiz,
        answers: [...quiz.answers],
        [name]: num,
      });
    }
  };

  const onChangeAnswersHandler = answerIndex => e => {
    const nextAnswers = quizAnswers.map((item, i) =>
      i === answerIndex ? e.target.value || '' : item,
    );
    if (!nextAnswers[quiz.rightAnswer - 1]) {
      const nextRightAnswerNums = nextAnswers
        .map((answer, i) => answer && i + 1)
        .filter(nums => nums);
      onChange({
        ...quiz,
        answers: nextAnswers,
        rightAnswer: nextRightAnswerNums[0] || 0,
      });
      return;
    }
    if (onChange) {
      onChange({ ...quiz, answers: nextAnswers });
    }
  };

  const answers = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const answerInputs = answers.map((data, i) => (
    <QuizEditorInput $title={`${t('answer.answer')} ${data.id}`} key={data.id}>
      <input
        type="text"
        value={quiz.answers[i] || ''}
        onChange={onChangeAnswersHandler(i)}
      />
    </QuizEditorInput>
  ));

  return (
    <Editor button={t('makeQuiz')}>
      <QuizEditorBlock>
        <h3 className="title">
          <div className="title-box">{t('common.quiz')}</div>
        </h3>

        <QuizEditorInput $title={t('common.title')}>
          <input
            type="text"
            value={quiz.title}
            onChange={onChangeHandler('title')}
          />
        </QuizEditorInput>

        <div className="answers">{answerInputs}</div>

        <QuizEditorInput $title={t('answer.rightAnswer')}>
          {quiz.answers[0] ||
          quiz.answers[1] ||
          quiz.answers[2] ||
          quiz.answers[3] ? (
            <NumberOptions
              option={quiz.rightAnswer}
              nums={rightAnswerNums}
              center
              onChange={onNumberChangeHandler('rightAnswer')}
            />
          ) : (
            <div className="no-answers">{t('answer.pleaseEnter')}</div>
          )}
        </QuizEditorInput>

        <QuizEditorInput $title={t('commentary.commentary')}>
          <textarea
            value={quiz.commentary}
            onChange={onChangeHandler('commentary')}
          />
        </QuizEditorInput>

        <QuizEditorInput $title={t('common.point')}>
          <NumberOptions
            option={quiz.point}
            count={6}
            center
            onChange={onNumberChangeHandler('point')}
          />
        </QuizEditorInput>
      </QuizEditorBlock>
    </Editor>
  );
};

QuizEditor.propTypes = {
  quiz: PropTypes.shape({
    title: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    commentary: PropTypes.string.isRequired,
    rightAnswer: PropTypes.number.isRequired,
    point: PropTypes.number.isRequired,
  }),
  onChange: PropTypes.func,
};

QuizEditor.defaultProps = {
  quiz: {
    title: '',
    answers: [],
    commentary: '',
    rightAnswer: 0,
    point: 0,
  },
  onChange: null,
};

const QuizEditorBlock = styled.div`
  > .title {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    > .title-box {
      width: 200px;
      height: 50px;
      margin: 0 auto;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
      background-color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
      color: ${({ theme }) => theme.colors.accentColor || '#000'};
      border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
      border-radius: 3px;
    }
  }
`;

const QuizEditorInput = styled.div`
  font-size: 1.25rem;
  padding: 0.3125rem;
  margin: 0.625rem 0;
  display: flex;
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};

  &::before {
    content: '${props => props.$title || 'Title'}:';
    width: 12.5rem;
  }

  > input {
    outline: none;
    border: none;
    font-size: 1.25rem;
    display: block;
    width: 100%;
    border-bottom: 3px solid
      ${({ theme }) => theme.colors.accentColor || '#000'};
  }

  > textarea {
    resize: none;
    width: 100%;
    height: 6.25rem;
    display: inline-block;
    overflow-y: auto;
    padding: 0.3125rem;
    border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
  }

  > .no-answers {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0.40625rem 0;
    font-size: 1rem;
    font-family: ${({ theme }) => theme.font.family.base || 'sans-seif'};
  }
`;

export default QuizEditor;
