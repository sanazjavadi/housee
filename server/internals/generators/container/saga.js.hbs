import { takeLatest, put, call } from 'redux-saga/effects';

import request from 'utils/request';

import { ACTIONS } from './actions';

export function* getTestRequest() {
  const BASE_URL = 'https://us-central1-react-next-boilerplate-cda8b.cloudfunctions.net/getShowcasesData';

  try {
    yield put(ACTIONS.request());

    const Testdata = yield call(request, BASE_URL);

    yield put(ACTIONS.success(Testdata));
  } catch (err) {
    yield put(ACTIONS.failure(err));
  } finally {
    yield put(ACTIONS.fulfill());
  }
}

export default function* dataTest() {
  yield takeLatest(ACTIONS.TRIGGER, getTestRequest);
}