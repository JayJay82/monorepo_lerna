import { VIDEOS_ACTION } from '../actions/videos.actions';
import { VIDEOS_SAGAS } from '../sagas/videos.sagas';

const initialState = {
    videosList: { items: [], fetching: false, error: null },
    selected: { id: null }
}
export function videoReducer(state = initialState, action) {
    switch (action.type) {
        case VIDEOS_SAGAS.FETCH_VIDEOS_SUCCESS: {
            const newState = { ...state, videosList: { ...state.videosList, items: action.payload }, selected: { id: action.payload[0].etag } };
            return newState;
        }
        case VIDEOS_ACTION.VIDEO_SELECTED: {
            const item = action.payload;
            const newState = { ...state, selected: { id: item.etag } };
            return newState;
        }
        default:
            return state;
    }
}