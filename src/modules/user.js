import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as userAPI from 'lib/api/user';
import createRequestSaga, {
  createRequestActionTypes,
} from 'lib/createRequestSaga';

const [SET_USER, SET_USER_SUCCESS, SET_USER_FAILURE] = createRequestActionTypes(
  'user/SET_USER',
);

export const setUser = createAction(SET_USER);

const setUserSaga = createRequestSaga(SET_USER, userAPI.getMe);
export function* userSaga() {
  yield takeLatest(SET_USER, setUserSaga);
}

const initialState = {
  user: null,
  setUserError: null,
};

const user = handleActions(
  {
    [SET_USER_SUCCESS]: (state, { payload: userData }) => ({
      ...state,
      user: userData,
      setUserError: null,
    }),
    [SET_USER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      setUserErrror: error,
    }),
  },
  initialState,
);

export default user;
