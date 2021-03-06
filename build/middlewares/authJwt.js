"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdmin = exports.isAuth = exports.verifyToken = void 0;

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config/config"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var verifyToken = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var token, decodedToken, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = req.headers["x-access-token"];

            if (token) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(403).json({
              "message": "Login required...!!!"
            }));

          case 4:
            decodedToken = _jsonwebtoken.default.verify(token, _config.default.SECRET);
            req.userId = decodedToken.id;
            _context.next = 8;
            return _User.default.findById(decodedToken.id, {
              password: 0
            });

          case 8:
            user = _context.sent;

            if (user) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "credentials not valid"
            }));

          case 11:
            next();
            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.name, _context.t0.message);
            return _context.abrupt("return", res.status(401).json({
              message: _context.t0.message
            }));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function verifyToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.verifyToken = verifyToken;

var isAuth = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var user, i, row;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _User.default.findById(req.userId, {
              password: 0
            }).populate("role", ['name']);

          case 3:
            user = _context2.sent;
            i = 0;

          case 5:
            if (!(i < user.role.length)) {
              _context2.next = 13;
              break;
            }

            row = user.role[i];

            if (!_config.default.ACCESS_RULE[req.method].includes(row.name)) {
              _context2.next = 10;
              break;
            }

            next();
            return _context2.abrupt("return");

          case 10:
            i++;
            _context2.next = 5;
            break;

          case 13:
            return _context2.abrupt("return", res.status('403').json({
              "message": "token not present"
            }));

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0.stack.split("\n")[1], _context2.t0.name, _context2.t0.message);
            return _context2.abrupt("return", res.status('403').json({
              "message": _context2.t0.message
            }));

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 16]]);
  }));

  return function isAuth(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.isAuth = isAuth;

var isAdmin = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var user, i, row;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _User.default.findById(req.userId, {
              password: 0
            }).populate("role", ['name']);

          case 3:
            user = _context3.sent;
            i = 0;

          case 5:
            if (!(i < user.role.length)) {
              _context3.next = 13;
              break;
            }

            row = user.role[i];

            if (!('admin' == row.name)) {
              _context3.next = 10;
              break;
            }

            next();
            return _context3.abrupt("return");

          case 10:
            i++;
            _context3.next = 5;
            break;

          case 13:
            return _context3.abrupt("return", res.status('403').json({
              "message": "role unauthorized"
            }));

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);
            return _context3.abrupt("return", res.status('403').json({
              "message": _context3.t0.message
            }));

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 16]]);
  }));

  return function isAdmin(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.isAdmin = isAdmin;