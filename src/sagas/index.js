import { fork } from 'redux-saga/effects';
import { loadContactsWatcher } from './Sagas';


export default function* rootSaga() {
  yield fork(loadContactsWatcher);
}
