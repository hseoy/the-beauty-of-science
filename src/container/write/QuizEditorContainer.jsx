import React, { useEffect } from 'react';
import { setQuiz, initializeQuiz } from 'modules/write';
import { useDispatch, useSelector } from 'react-redux';
import QuizEditor from 'components/write/QuizEditor';

const QuizEditorContainer = () => {
  const dispatch = useDispatch();
  const { quiz } = useSelector(state => ({ quiz: state.write.quiz }));
  const onChange = ({ title, answers, rightAnswer, commentary, point }) => {
    dispatch(setQuiz({ title, answers, rightAnswer, commentary, point }));
  };

  useEffect(() => {
    dispatch(initializeQuiz());
  }, []);

  return <QuizEditor quiz={quiz} onChange={onChange} />;
};

export default QuizEditorContainer;
