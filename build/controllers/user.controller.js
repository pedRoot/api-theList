"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = exports.show = void 0;

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.array.find.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.object.to-string.js");

var _User = _interopRequireDefault(require("../models/User"));

var _argon = _interopRequireDefault(require("argon2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var show = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var fieldsShow, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            fieldsShow = 'email isActive wasSelected';
            user = '';

            if (!(Object.keys(req.body).length == 0)) {
              _context.next = 9;
              break;
            }

            _context.next = 6;
            return _User.default.find({}, fieldsShow);

          case 6:
            user = _context.sent;
            _context.next = 14;
            break;

          case 9:
            _context.next = 11;
            return _User.default.findOne({
              email: req.body.email
            }, fieldsShow);

          case 11:
            user = _context.sent;

            if (user) {
              _context.next = 14;
              break;
            }

            throw new Error("User ".concat(req.body.email, " not fount...!!!"));

          case 14:
            res.status(200).json({
              "message": user
            });
            _context.next = 21;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            console.error('Error in show users: ', _context.t0);
            res.status(500).json({
              "message": _context.t0.message
            });

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  }));

  return function show(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.show = show;

var update = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            if (!(Object.keys(req.body).length == 0)) {
              _context2.next = 3;
              break;
            }

            throw new Error('Unspecified values');

          case 3:
            if (req.body.email) {
              _context2.next = 5;
              break;
            }

            throw new Error('Unspecified mailing address...!!!');

          case 5:
            if (!(req.body.email == 'admin@localhost')) {
              _context2.next = 7;
              break;
            }

            throw new Error("User (".concat(req.body.email, ") is blocked ...!!!"));

          case 7:
            if (!req.body.pasword) {
              _context2.next = 11;
              break;
            }

            _context2.next = 10;
            return _argon.default.hash(password);

          case 10:
            req.body.pasword = _context2.sent;

          case 11:
            _context2.next = 13;
            return _User.default.findOne({
              email: req.body.email
            });

          case 13:
            user = _context2.sent;

            if (user) {
              _context2.next = 16;
              break;
            }

            throw new Error("User (".concat(req.body.email, ") not found...!!!"));

          case 16:
            if (req.body.password) user.password = req.body.password;
            if (req.body.wasSelected) user.wasSelected = req.body.wasSelected;
            if (req.body.isActive) user.isActive = req.body.isActive;
            _context2.next = 21;
            return user.save();

          case 21:
            res.status(200).json(user);
            _context2.next = 28;
            break;

          case 24:
            _context2.prev = 24;
            _context2.t0 = _context2["catch"](0);
            console.error('Error in update user: ', _context2.t0.name + ': ' + _context2.t0.message);
            res.status(500).json({
              "message": _context2.t0.message
            });

          case 28:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 24]]);
  }));

  return function update(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.update = update;