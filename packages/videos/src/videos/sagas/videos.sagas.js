import axios from 'axios';
import { VIDEOS_ACTION } from '../actions/videos.actions';
import { VIDEOS_URI } from '../_videos_configuration/api.uri';
import { takeLatest, call, put } from 'redux-saga/effects';

export const VIDEOS_SAGAS = {
    FETCH_VIDEOS_STARTED: 'FETCH_VIDEOS_STARTED',
    FETCH_VIDEOS_SUCCESS: 'FETCH_VIDEOS_SUCCESS',
    FETCH_VIDEOS_FAIL: 'FETCH_VIDEOS_FAIL'
}

export function* fetchVideosWatcherSaga() {
    yield takeLatest(VIDEOS_ACTION.FETCH_VIDEOS_REQUEST, fetchVideosSaga);
}

function fetchVideos(term) {
    const uri = VIDEOS_URI + term;
    return axios({
        method: 'get',
        url: uri
    })
}

function* fetchVideosSaga(action) {
    try {
        const response = yield call(fetchVideos, action.payload);
        yield put({ type: VIDEOS_SAGAS.FETCH_VIDEOS_SUCCESS, payload: response.data.items });
    }
    catch (e) {

    }
}