import { combineReducers } from "redux";
import user, { userSaga } from "./login/login";
import todos, { todosSaga } from "./todos/todos";

import { all } from "redux-saga/effects";

const rootReducer = combineReducers({ user, todos });

export function* rootSaga() {
  yield all([userSaga(), todosSaga()]);
}

export default rootReducer;
