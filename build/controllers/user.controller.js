"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = exports.show = exports.list = void 0;

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.array.find.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.object.to-string.js");

var _User = _interopRequireDefault(require("../models/User"));

var _argon = _interopRequireDefault(require("argon2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var list = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _User.default.find({}, 'email isActive wasSelected').populate('Role', ['name']).then(function (rows) {
              res.status(200).json(rows);
            });

          case 2:
            users = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function list(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.list = list;

var show = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _User.default.findById(req.params.id);

          case 3:
            user = _context2.sent;

            if (user) {
              _context2.next = 6;
              break;
            }

            throw new Error('User not fount !!!');

          case 6:
            res.status(200).json({
              "message": user
            });
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.error('Error in show Product: ', _context2.t0.name + ': ' + _context2.t0.message);
            res.status(500).json({
              "message": _context2.t0.message
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function show(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.show = show;

var update = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            if (!(Object.keys(req.body).length == 0)) {
              _context3.next = 3;
              break;
            }

            throw new Error('Unspecified values');

          case 3:
            if (req.body.email) {
              _context3.next = 5;
              break;
            }

            throw new Error('Unspecified mailing address...!!!');

          case 5:
            if (!req.body.pasword) {
              _context3.next = 9;
              break;
            }

            _context3.next = 8;
            return _argon.default.hash(password);

          case 8:
            req.body.pasword = _context3.sent;

          case 9:
            _context3.next = 11;
            return _User.default.findOneAndUpdate({
              email: req.body.email
            }, req.body, {
              upsert: false,
              returnNewDocument: true
            });

          case 11:
            user = _context3.sent;

            if (user) {
              _context3.next = 14;
              break;
            }

            throw new Error("User (".concat(req.body.email, ") not found...!!!"));

          case 14:
            res.status(202);
            _context3.next = 21;
            break;

          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](0);
            console.error('Error in update user: ', _context3.t0.name + ': ' + _context3.t0.message);
            res.status(500).json({
              "message": _context3.t0.message
            });

          case 21:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 17]]);
  }));

  return function update(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.update = update;