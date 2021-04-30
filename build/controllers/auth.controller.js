"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signin = exports.signup = void 0;

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.array.find.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

var _User = _interopRequireDefault(require("../models/User"));

var _Role = _interopRequireDefault(require("../models/Role"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config/config"));

var _argon = _interopRequireDefault(require("argon2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signup = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, email, password, roles, user, role, _role, newUser;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, email = _req$body.email, password = _req$body.password, roles = _req$body.roles;
            _context.t0 = _User.default;
            _context.t1 = email;
            _context.next = 6;
            return _argon.default.hash(req.body.password);

          case 6:
            _context.t2 = _context.sent;
            _context.t3 = {
              email: _context.t1,
              password: _context.t2
            };
            user = new _context.t0(_context.t3);

            if (!roles) {
              _context.next = 16;
              break;
            }

            _context.next = 12;
            return _Role.default.find({
              name: {
                $in: roles
              }
            });

          case 12:
            role = _context.sent;

            if (role) {
              user.role = role.map(function (role) {
                return role.id;
              });
            }

            _context.next = 20;
            break;

          case 16:
            _context.next = 18;
            return _Role.default.findOne({
              name: 'user'
            });

          case 18:
            _role = _context.sent;
            user.role = [_role.id];

          case 20:
            _context.next = 22;
            return user.save();

          case 22:
            newUser = _context.sent;
            res.status(201).json();
            _context.next = 30;
            break;

          case 26:
            _context.prev = 26;
            _context.t4 = _context["catch"](0);
            res.status(500).json({
              "message": 'User not created...!!!'
            });
            console.error('Error in add User: ', _context.t4.name + ': ' + _context.t4.message);

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 26]]);
  }));

  return function signup(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signup = signup;

var signin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body2, email, password, user, isValidPassword, token;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
            _context2.next = 4;
            return _User.default.findOne({
              email: email
            });

          case 4:
            user = _context2.sent;

            if (user) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              "message": "User not found...!!!"
            }));

          case 7:
            if (!user.isActive) res.status(403).json({
              "message": "User not active...!!!"
            });
            _context2.next = 10;
            return _argon.default.verify(user.password, password);

          case 10:
            isValidPassword = _context2.sent;

            if (isValidPassword) {
              _context2.next = 13;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              "message": "Credentials not valid...!!!"
            }));

          case 13:
            token = _jsonwebtoken.default.sign({
              id: user.id
            }, _config.default.SECRET, {
              expiresIn: 86400 //24 horas

            });
            res.status(200).json({
              token: token
            });
            _context2.next = 21;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              "message": 'User not verify...!!!'
            });
            console.error('Error in login User: ', _context2.t0.name + ': ' + _context2.t0.message);

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 17]]);
  }));

  return function signin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signin = signin;