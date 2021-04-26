import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as userAPI from 'lib/api/user';
import createRequestSaga, {
  createRequestActionTypes,
} from 'lib/createRequestSaga';

const [SET_USER, SET_USER_SUCCESS, SET_USER_FAILURE] = createRequestActionTypes(
  'user/SET_USER',
);
const [
  SET_AVATAR,
  SET_AVATAR_SUCCESS,
  SET_AVATAR_FAILURE,
] = createRequestActionTypes('user/SET_AVATAR');

export const setUser = createAction(SET_USER);
export const setAvatar = createAction(SET_AVATAR);

const setUserSaga = createRequestSaga(SET_USER, userAPI.getMe);
const setAvatarSaga = createRequestSaga(SET_AVATAR, userAPI.getMeAvatarFile);

export function* userSaga() {
  yield takeLatest(SET_USER, setUserSaga);
  yield takeLatest(SET_AVATAR, setAvatarSaga);
}

const initialState = {
  user: null,
  setUserError: null,
  avatar: null,
  setAvatarError: null,
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
    [SET_AVATAR_SUCCESS]: (state, { payload: avatarData }) => ({
      ...state,
      avatar: avatarData,
      setAvatarErrror: null,
    }),
    [SET_AVATAR_FAILURE]: (state, { payload: error }) => ({
      ...state,
      avatar: null,
      setAvatarErrror: error,
    }),
  },
  initialState,
);

export default user;
