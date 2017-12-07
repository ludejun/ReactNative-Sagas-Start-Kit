import { put, take, call, fork } from 'redux-saga/effects';
import { types } from '../actions/user';
import FakeRequest from '../utils/fakeRequest';

function* login(payload) {
  console.log(payload);
  // const {values, success} = payload;
  try {
    const data = yield call(FakeRequest, {username: '', token:'dawea'}, 1000);

    yield put({ type: types.LOGIN_SUCCESS, data});

    // if (payload.cb) {
    //   yield call(payload.cb);
    // }
  } catch (error) {
    yield put({type: types.LOGIN_FAIL, info: error.message});
  }
}
export function* watchLogin() {
  while (true) {
    const { payload } = yield take(types.LOGIN);

    yield fork(login, payload);
  }
}