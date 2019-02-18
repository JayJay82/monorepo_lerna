"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectedVideo = exports.getVideoId = exports.getVideos = void 0;

var _reselect = require("reselect");

var getVideoListState = function getVideoListState(state) {
  return state.videos.videosList;
};

var getVideoIdState = function getVideoIdState(state) {
  return state.videos.selected.id;
};

var getVideos = (0, _reselect.createSelector)([getVideoListState], function (videos) {
  return videos;
});
exports.getVideos = getVideos;
var getVideoId = (0, _reselect.createSelector)([getVideoIdState], function (id) {
  return id;
});
exports.getVideoId = getVideoId;
var getSelectedVideo = (0, _reselect.createSelector)([getVideos, getVideoId], function (videos, id) {
  if (videos.items.length > 0 && id != null) {
    var video = videos.items.find(function (item) {
      return item.etag === id;
    });
    return video;
  }
});
exports.getSelectedVideo = getSelectedVideo;