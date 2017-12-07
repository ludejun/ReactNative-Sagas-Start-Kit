import {fork} from 'redux-saga/effects';
import * as user from './user';
import * as drawer from './drawer';
import * as list from './list';

export default function* rootSaga() {
  yield [
    // fork(home.watchGetHomeInfo),
    fork(user.watchLogin),
    fork(list.watchFetchList),
  ];
}