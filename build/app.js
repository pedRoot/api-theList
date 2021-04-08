"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _auth = _interopRequireDefault(require("./routes/auth.route"));

var _user = _interopRequireDefault(require("./routes/user.route"));

var _draw = _interopRequireDefault(require("./routes/draw.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Configuring the app
var app = (0, _express.default)(); // import * as run from "./libs/setupScripts";
// run.createRole();
// run.createMeeting();
// run.createDraw();
// run.createUser();

app.set('pkg', _package.default);
app.use((0, _morgan.default)('dev'));
app.use(_express.default.json()); // routes

app.get('/', function (req, res) {
  res.json({
    "name": app.get('pkg').name,
    "autor": app.get('pkg').author,
    "description": app.get('pkg').description,
    "version": app.get('pkg').version
  });
  console.log('Epale chamo esto está yendo bien...');
});
app.use('/api/v1/auth', _auth.default);
app.use('/api/v1/users', _user.default);
app.use('/api/v1/draws', _draw.default);
var _default = app;
exports.default = _default;