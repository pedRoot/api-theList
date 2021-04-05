"use strict";

require("core-js/modules/es.array.concat.js");

var _app = _interopRequireDefault(require("./app.js"));

require("./config/database");

require("core-js/stable");

require("regenerator-runtime/runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.port || 3580;

var env = _app.default.get('env');

_app.default.listen(port, function () {
  return console.log("App server listen on port: ".concat(port, ", for ").concat(env));
});