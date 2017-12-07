import { put, take, call, fork } from 'redux-saga/effects';
import { types } from '../actions/list';
import FakeRequest from '../utils/fakeRequest';

function* fetchList(payload) {
  console.log(payload);
  try {
    const list = [
      'React Native Starter Kit',
      'React Navigation',
      'NativeBase Easy Grid',
      'NativeBase',
      'CodePush',
      'Redux',
    ];
    const data = yield call(FakeRequest, list, 1000);

    yield put({ type: types.FETCH_LIST_SUCCESS, data});

    // if(payload.cb) { yield call(payload.cb)}
  } catch (error) {
    yield put({type: types.FETCH_LIST_FAIL});
    alert('Fetch list error');
  }
}
export function* watchFetchList() {
  while (true) {
    console.log(11111);
    const { payload } = yield take(types.FETCH_LIST);

    yield fork(fetchList, payload);
  }
}