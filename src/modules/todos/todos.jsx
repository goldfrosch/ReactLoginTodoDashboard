import { call, put, takeEvery } from "@redux-saga/core/effects";
import * as todosAPI from "../../api/todosApi";

const GET = "GET";
const CREATE = "CREATE";
const REMOVE = "REMOVE";
const CHECK = "CHECK";

const SUCCESS = "SUCCESS";

export const getAction = () => ({
  type: GET,
});

export const createAction = (content) => ({
  type: CREATE,
  content,
});

export const removeAction = (id) => ({
  type: REMOVE,
  id,
});

export const checkAction = (id) => ({
  type: CHECK,
  id,
});

export const successAction = (todos) => ({
  type: SUCCESS,
  todos,
});

function* getTodoSaga() {
  try {
    const res = yield call(todosAPI.getTodos);
    if (res.status !== 200) return null;
    yield put(successAction(res.data));
  } catch (e) {
    console.log(e);
  }
}

function* createTodoSaga(action) {
  try {
    const res = yield call(todosAPI.addTodo, action.content);
    if (res.status !== 201) return null;
    yield put(successAction(res.data));
  } catch (e) {
    console.log(e);
  }
}

function* removeTodoSaga(action) {
  try {
    const res = yield call(todosAPI.deleteTodo, action.id);
    if (res.status !== 200) return null;
    yield put(successAction(res.data));
  } catch (e) {
    console.log(e);
  }
}

function* checkTodoSaga(action) {
  try {
    const res = yield call(todosAPI.toggleTodo, action.id);
    if (res.status !== 200) return null;
    yield put(successAction(res.data));
  } catch (e) {
    console.log(e);
  }
}

export function* todosSaga() {
  yield takeEvery(GET, getTodoSaga);
  yield takeEvery(CREATE, createTodoSaga);
  yield takeEvery(REMOVE, removeTodoSaga);
  yield takeEvery(CHECK, checkTodoSaga);
}

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case SUCCESS:
      return action.todos;
    default:
      return state;
  }
}
