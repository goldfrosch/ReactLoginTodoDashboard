import { call, put, takeEvery } from "@redux-saga/core/effects";
import { getContext } from "redux-saga/effects";
import * as userAPI from "../../api/userApi";

const LOGIN = "LOGIN";
const LOGIN_ASYNC = "LOGIN_ASYNC";

const LOGOUT = "LOGOUT";
const LOGOUT_ASYNC = "LOGOUT_ASYNC";

const GET_PROFILE = "GET_PROFILE";

export const loginAction = (id) => ({
  type: LOGIN,
  username: id,
});

export const loginAsyncAction = (username, password) => ({
  type: LOGIN_ASYNC,
  userinfo: {
    username,
    password,
  },
});

export const logoutAction = () => ({
  type: LOGOUT,
});

export const logoutAsyncAction = () => ({
  type: LOGOUT_ASYNC,
});

export const getUserProfileAction = () => ({
  type: GET_PROFILE,
});

function* loginSaga(action) {
  try {
    const response = yield call(userAPI.login, action.userinfo);
    const history = yield getContext("history");
    if (response.status !== 200) return console.log("로그인 실패");
    yield put(loginAction(action.userinfo.username));
    yield put(getUserProfileAction());
    history.push("/todos");
  } catch (e) {
    console.log(e);
  }
}

function* logoutSaga() {
  try {
    const res = yield call(userAPI.logout);
    const history = yield getContext("history");
    console.log(res);
    yield put(logoutAction());
    history.push("/");
  } catch (e) {
    console.log(e);
  }
}

function* getProfileSaga() {
  try {
    yield call(userAPI.getUserInfo);
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeEvery(LOGIN_ASYNC, loginSaga);
  yield takeEvery(LOGOUT_ASYNC, logoutSaga);
  yield takeEvery(GET_PROFILE, getProfileSaga);
}

const initialState = "";

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return (state = action.username);
    case LOGOUT:
      return (state = "");
    default:
      return state;
  }
}
