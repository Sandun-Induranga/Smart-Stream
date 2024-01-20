import { all } from "redux-saga/effects";
import { studentSaga } from "./student/saga";

export default function* rootSaga() {
  yield all([studentSaga()]);
}
