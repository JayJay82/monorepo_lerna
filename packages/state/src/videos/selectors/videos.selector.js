import { createSelector } from 'reselect';

const getVideoListState = (state) => state.videos.videosList;
const getVideoIdState = (state) => state.videos.selected.id;

export const getVideos = createSelector(
    [getVideoListState],
    (videos) => videos
)

export const getVideoId = createSelector(
    [getVideoIdState],
    (id) => id
)

export const getSelectedVideo = createSelector(
    [getVideos, getVideoId],
    (videos, id) => {
        if (videos.items.length > 0 && id != null) {
            const video = videos.items.find(item => item.etag === id);
            return video;
        }
    }
)

