"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _configEnv = _interopRequireDefault(require("./config/config-env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var whileList = [_configEnv.default.URL_FRONT];

var _default = corsOptions = {
  origin: function origin(_origin, callback) {
    if (whileList.indexOf(_origin) !== -1 || !_origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

exports.default = _default;