import { all, fork } from "redux-saga/effects";
import { HomeSaga } from "../../Pages/Home-page/Saga";

export default function* rootSaga() {
  yield all([fork(HomeSaga)]);
}
