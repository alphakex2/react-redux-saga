import { SagaIterator } from "redux-saga"
import {
  call,
  takeEvery,
  fork,
  put,
} from "redux-saga/effects"
import {
  getUsersApi,
} from "../../services/usersApi"
import {  getUsers } from "../slices/addressSlice"
import { getUsersRequest } from "./../slices/addressSlice"

function* getUsersWorker(): SagaIterator {
  try {
    const { data } = yield call(getUsersApi)

    yield put(getUsers(data.data))
  } catch (error) {
    console.log(error)
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(getUsersRequest.toString(), getUsersWorker)
}



const UsersSagas = [fork(watchGetUsersRequest)]

export default UsersSagas
