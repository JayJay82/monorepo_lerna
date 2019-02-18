"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoReducer = videoReducer;

var _videos = require("../actions/videos.actions");

var _videos2 = require("../sagas/videos.sagas");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  videosList: {
    items: [],
    fetching: false,
    error: null
  },
  selected: {
    id: null
  }
};

function videoReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _videos2.VIDEOS_SAGAS.FETCH_VIDEOS_SUCCESS:
      {
        var newState = _objectSpread({}, state, {
          videosList: _objectSpread({}, state.videosList, {
            items: action.payload
          }),
          selected: {
            id: action.payload[0].etag
          }
        });

        return newState;
      }

    case _videos.VIDEOS_ACTION.VIDEO_SELECTED:
      {
        var item = action.payload;

        var _newState = _objectSpread({}, state, {
          selected: {
            id: item.etag
          }
        });

        return _newState;
      }

    default:
      return state;
  }
}