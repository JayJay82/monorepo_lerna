const { VIDEOS_ACTION , videoSelected, fetchVideos } = require('./videos/actions/videos.actions');
const {videoReducer}  = require('./videos/reducers/videos.reducer');
const { VIDEOS_SAGAS , fetchVideosWatcherSaga } = require('./videos/sagas/videos.sagas');
const { getSelectedVideo, getVideoId ,getVideos} = require('./videos/selectors/videos.selector');


module.exports = {
    VIDEOS_ACTION, 
    videoSelected, 
    fetchVideos,
    videoReducer,
    VIDEOS_SAGAS,
    fetchVideosWatcherSaga,
    getSelectedVideo,
    getVideoId,
    getVideos
}