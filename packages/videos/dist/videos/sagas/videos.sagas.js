"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchVideosWatcherSaga = fetchVideosWatcherSaga;
exports.VIDEOS_SAGAS = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _videos = require("../actions/videos.actions");

var _api = require("../_videos_configuration/api.uri");

var _effects = require("redux-saga/effects");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(fetchVideosWatcherSaga),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchVideosSaga);

var VIDEOS_SAGAS = {
  FETCH_VIDEOS_STARTED: 'FETCH_VIDEOS_STARTED',
  FETCH_VIDEOS_SUCCESS: 'FETCH_VIDEOS_SUCCESS',
  FETCH_VIDEOS_FAIL: 'FETCH_VIDEOS_FAIL'
};
exports.VIDEOS_SAGAS = VIDEOS_SAGAS;

function fetchVideosWatcherSaga() {
  return regeneratorRuntime.wrap(function fetchVideosWatcherSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.takeLatest)(_videos.VIDEOS_ACTION.FETCH_VIDEOS_REQUEST, fetchVideosSaga);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

function fetchVideos(term) {
  var uri = _api.VIDEOS_URI + term;
  return (0, _axios.default)({
    method: 'get',
    url: uri
  });
}

function fetchVideosSaga(action) {
  var response;
  return regeneratorRuntime.wrap(function fetchVideosSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _effects.call)(fetchVideos, action.payload);

        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return (0, _effects.put)({
            type: VIDEOS_SAGAS.FETCH_VIDEOS_SUCCESS,
            payload: response.data.items
          });

        case 6:
          _context2.next = 10;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 8]]);
}