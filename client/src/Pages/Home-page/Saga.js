import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./Types";
import api from "../../Api";
import * as actions from "./Actions";

function* getPostsSaga(action) {
  try {
    const posts = yield call(api.getPosts);
    yield put(actions.setUsers(posts));
  } catch (err) {
    yield put(actions.setUsersErrors(err.response.data));
  }
}

export function* HomeSaga() {
  yield takeLatest(actionTypes.GET_USERS_REQUEST, getPostsSaga);
}
