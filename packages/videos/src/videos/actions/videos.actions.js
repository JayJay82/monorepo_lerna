
export const VIDEOS_ACTION = {
    FETCH_VIDEOS_REQUEST: 'FETCH_VIDEOS_REQUEST',
    VIDEO_SELECTED: 'VIDEO_SELECTED'
}

export const fetchVideos = term => {
    return {
        type: VIDEOS_ACTION.FETCH_VIDEOS_REQUEST,
        payload: term
    }
}

export const videoSelected = item => {
    return {
        type: VIDEOS_ACTION.VIDEO_SELECTED,
        payload: item
    }
}