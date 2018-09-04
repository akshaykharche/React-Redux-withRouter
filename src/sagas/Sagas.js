import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import loadUserApi from '../api/Api';
import * as actionTypes from '../constants';

export function* loadContactsWatcher() {
  yield* takeLatest(actionTypes.REQUEST_LOADING, laodContactsSaga);
}
export function* laodContactsSaga({ payload }) {
  try {
    const userObject = yield call(loadUserApi, payload);
    yield [put({ type: actionTypes.REQUEST_SUCCESS, users: userObject })];
  } catch (error) {
    yield [put({ type: actionTypes.REQUEST_FAILED, error })];
  }
    
}



