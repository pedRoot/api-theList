"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.symbol.iterator.js");

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

var Sentry = _interopRequireWildcard(require("@sentry/node"));

var Tracing = _interopRequireWildcard(require("@sentry/tracing"));

var run = _interopRequireWildcard(require("./libs/setupScripts"));

var _auth = _interopRequireDefault(require("./routes/auth.route"));

var _user = _interopRequireDefault(require("./routes/user.route"));

var _draw = _interopRequireDefault(require("./routes/draw.route"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
run.createRole();
run.createMeeting();
run.createDraw();
run.createUser();
Sentry.init({
  dns: "https://555d24e190a5442c9e4623cf48c3a5cc@o568415.ingest.sentry.io/5713503",
  integrations: [new Sentry.Integrations.Http({
    tracing: true
  }), new Tracing.Integrations.Express({
    app: app
  })],
  tracesSampleRate: 1.0
});
app.use(Sentry.Handlers.requestHandler({
  serverName: false,
  user: ["email"]
}));
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
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.use(Sentry.Handlers.tracingHandler());
app.use(Sentry.Handlers.errorHandler());
app.use(function onError(err, req, res, next) {
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});
var _default = app;
exports.default = _default;