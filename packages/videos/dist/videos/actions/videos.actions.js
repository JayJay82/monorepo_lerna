"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoSelected = exports.fetchVideos = exports.VIDEOS_ACTION = void 0;
var VIDEOS_ACTION = {
  FETCH_VIDEOS_REQUEST: 'FETCH_VIDEOS_REQUEST',
  VIDEO_SELECTED: 'VIDEO_SELECTED'
};
exports.VIDEOS_ACTION = VIDEOS_ACTION;

var fetchVideos = function fetchVideos(term) {
  return {
    type: VIDEOS_ACTION.FETCH_VIDEOS_REQUEST,
    payload: term
  };
};

exports.fetchVideos = fetchVideos;

var videoSelected = function videoSelected(item) {
  return {
    type: VIDEOS_ACTION.VIDEO_SELECTED,
    payload: item
  };
};

exports.videoSelected = videoSelected;