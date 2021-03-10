import React, { useState } from 'react';
import Modal from 'components/Modal';
import EditorTriggerButton from 'components/EditorTriggerButton';
import S from './style';
import Title from './Title';
import ChoiceNumber from './ChoiceNumber';
import InputSingleLine from './InpuSingleLine';
import InputMultipleLine from './InputMultipleLine';

const QuizEditor = () => {
  const [editorVisible, setEditorVisible] = useState(false);
  const [quizTitle, setQuizTitle] = useState('# Hello');
  const [quizAnswers, setQuizAnswers] = useState({
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
  });
  const [quizCommentary, setQuizCommentary] = useState('HELLO');
  const [quizRightAnswer, setQuizRightAnswer] = useState(0);
  const [quizPoint, setQuizPoint] = useState(0);

  const openEditor = () => {
    setEditorVisible(true);
  };

  const closeEditor = () => {
    setEditorVisible(false);
  };

  const answerChangeHandler = target => value => {
    const answers = { ...quizAnswers };
    answers[target] = value;
    setQuizAnswers(answers);
  };

  return (
    <>
      <EditorTriggerButton
        onClickHandler={openEditor}
        hiddenTitle="Make a quiz"
        right
      >
        Help others learn
      </EditorTriggerButton>

      <Modal
        visible={editorVisible}
        closable
        closeHandler={closeEditor}
        bgColor="#fff"
      >
        <S.EditorWrap>
          <Title>Quiz</Title>
          <S.QuizContentInputWrap>
            <InputSingleLine
              title="Title"
              valueChangeHandler={setQuizTitle}
              value={quizTitle}
            />
            <InputSingleLine
              title="Answer 1"
              valueChangeHandler={answerChangeHandler('answer1')}
              value={quizAnswers.answer1}
            />
            <InputSingleLine
              title="Answer 2"
              valueChangeHandler={answerChangeHandler('answer2')}
              value={quizAnswers.answer2}
            />
            <InputSingleLine
              title="Answer 3"
              valueChangeHandler={answerChangeHandler('answer3')}
              value={quizAnswers.answer3}
            />
            <InputSingleLine
              title="Answer 4"
              valueChangeHandler={answerChangeHandler('answer4')}
              value={quizAnswers.answer4}
            />
            <ChoiceNumber
              title="Right Answer"
              count={4}
              valueChangeHandler={setQuizRightAnswer}
              value={quizRightAnswer}
            />
            <InputMultipleLine
              title="Commentary"
              valueChangeHandler={setQuizCommentary}
              value={quizCommentary}
            />
            <ChoiceNumber
              title="Point"
              count={5}
              valueChangeHandler={setQuizPoint}
              value={quizPoint}
            />
          </S.QuizContentInputWrap>
          <S.QuizUploadButtonWrap>
            <S.QuizUploadButton>Make a Quiz</S.QuizUploadButton>
          </S.QuizUploadButtonWrap>
        </S.EditorWrap>
      </Modal>
    </>
  );
};

export default QuizEditor;
