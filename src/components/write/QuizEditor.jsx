import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NmberOptions from 'components/common/NumberOptions';
import Editor from './Editor';

const QuizEditor = ({ quiz, onChange }) => {
  const onChangeHandler = name => e => {
    if (onChange) {
      onChange({
        ...quiz,
        answers: [...quiz.answers],
        [name]: e?.target?.value ? e.target.value : e,
      });
    }
  };

  const onChangeAnswersHandler = answerIndex => e => {
    const nextAnswers = quiz.answers.map((item, i) =>
      i === answerIndex ? e.target.value : item,
    );
    if (onChange) {
      onChange({ ...quiz, answers: nextAnswers });
    }
  };

  const answers = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const answerInputs = answers.map((data, i) => (
    <QuizEditorInput $title={`Answer ${data.id}`} key={data.id}>
      <input
        type="text"
        value={quiz.answers[i]}
        onChange={onChangeAnswersHandler(i)}
      />
    </QuizEditorInput>
  ));

  return (
    <Editor button="Make a Quiz">
      <QuizEditorBlock>
        <h3 className="title">
          <div className="title-box">Quiz</div>
        </h3>

        <QuizEditorInput $title="Title">
          <input
            type="text"
            value={quiz.title}
            onChange={onChangeHandler('title')}
          />
        </QuizEditorInput>

        <div className="answers">{answerInputs}</div>

        <QuizEditorInput $title="Right Answer">
          <NmberOptions
            option={quiz.rightAnswer}
            start={1}
            count={4}
            center
            onChange={onChangeHandler('rightAnswer')}
          />
        </QuizEditorInput>

        <QuizEditorInput $title="Commentary">
          <textarea
            type="text"
            value={quiz.commentary}
            onChange={onChangeHandler('commentary')}
          />
        </QuizEditorInput>

        <QuizEditorInput $title="Point">
          <NmberOptions
            option={quiz.point}
            count={6}
            center
            onChange={onChangeHandler('point')}
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
`;

export default QuizEditor;
