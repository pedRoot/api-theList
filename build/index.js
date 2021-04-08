"use strict";

require("core-js/modules/es.array.concat.js");

var _app = _interopRequireDefault(require("./app.js"));

require("./config/database");

require("core-js/stable");

require("regenerator-runtime/runtime");

var _configEnv = _interopRequireDefault(require("./config/config-env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app.default.listen(_configEnv.default.PORT, function () {
  return console.log("App server listen on port: ".concat(_configEnv.default.PORT, ", for ").concat(_configEnv.default.NODE_ENV));
});