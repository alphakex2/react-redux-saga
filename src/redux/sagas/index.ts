import { all } from "redux-saga/effects"
import usersSagas from "./usersSaga"

export default function* rootSaga() {
  yield all([...usersSagas])
}
