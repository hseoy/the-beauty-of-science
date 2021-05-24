import { createAction, handleActions } from 'redux-actions';

const SET_POST = 'write/SET_POST';
const INITIALIZE_POST = 'write/INITIALIZE_POST';
const SET_QUIZ = 'write/SET_QUIZ';
const INITIALIZE_QUIZ = 'write/INITIALIZE_QUIZ';

export const setPost = createAction(SET_POST, post => post);
export const initializePost = createAction(INITIALIZE_POST);
export const setQuiz = createAction(SET_QUIZ, quiz => quiz);
export const initializeQuiz = createAction(INITIALIZE_QUIZ);

const initialState = {
  post: {
    title: '',
    content: '',
    category: '',
  },
  quiz: {
    title: '',
    answers: [],
    rightAnswer: 0,
    commentary: '',
    point: 0,
  },
};

const write = handleActions(
  {
    [SET_POST]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [INITIALIZE_POST]: state => ({
      ...state,
      post: initialState.post,
    }),
    [SET_QUIZ]: (state, { payload: quiz }) => ({
      ...state,
      quiz,
    }),
    [INITIALIZE_QUIZ]: state => ({
      ...state,
      quiz: initialState.quiz,
    }),
  },
  initialState,
);

export default write;
