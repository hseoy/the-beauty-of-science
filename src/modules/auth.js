import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from 'lib/createRequestSaga';
import * as authAPI from 'lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] = createRequestActionTypes(
  'auth/SIGNUP',
);
const [SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE] = createRequestActionTypes(
  'auth/SIGNIN',
);
const [REFRESH, REFRESH_SUCCESS, REFRESH_FAILURE] = createRequestActionTypes(
  'auth/REFRESH',
);

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);
export const refreshToken = createAction(REFRESH);
export const signup = createAction(SIGNUP, ({ username, email, password }) => ({
  username,
  email,
  password,
}));
export const signin = createAction(SIGNIN, ({ email, password }) => ({
  email,
  password,
}));

const signupSaga = createRequestSaga(SIGNUP, authAPI.signup);
const signinSaga = createRequestSaga(SIGNIN, authAPI.signin);
const refreshSaga = createRequestSaga(REFRESH, authAPI.refresh);

export function* authSaga() {
  yield takeLatest(SIGNUP, signupSaga);
  yield takeLatest(SIGNIN, signinSaga);
  yield takeLatest(REFRESH, refreshSaga);
}

const initialState = {
  signup: {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  },
  signin: {
    email: '',
    password: '',
  },
  auth: null,
  authError: null,
  refresh: null,
  refreshError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null,
      refreshError: null,
    }),
    [SIGNUP_SUCCESS]: (state, { payload: authData }) => ({
      ...state,
      authError: null,
      auth: authData,
    }),
    [SIGNUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [SIGNIN_SUCCESS]: (state, { payload: authData }) => ({
      ...state,
      authError: null,
      auth: authData,
    }),
    [SIGNIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [REFRESH_SUCCESS]: (state, { payload: refreshData }) => ({
      ...state,
      refreshError: null,
      refresh: refreshData,
    }),
    [REFRESH_FAILURE]: (state, { payload: error }) => ({
      ...state,
      refresh: null,
      refreshError: error,
    }),
  },
  initialState,
);

export default auth;
