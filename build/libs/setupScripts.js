"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = exports.createDraw = exports.createMeeting = exports.createRole = void 0;

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _Role = _interopRequireDefault(require("../models/Role"));

var _User = _interopRequireDefault(require("../models/User"));

var _Meeting = _interopRequireDefault(require("../models/Meeting"));

var _Draw = _interopRequireDefault(require("../models/Draw"));

var _argon = _interopRequireDefault(require("argon2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createRole = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var count, values;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Role.default.estimatedDocumentCount();

          case 3:
            count = _context.sent;

            if (!(count > 0)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            _context.next = 8;
            return Promise.all([new _Role.default({
              name: 'user'
            }).save(), new _Role.default({
              name: 'admin'
            }).save()]);

          case 8:
            values = _context.sent;
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function createRole() {
    return _ref.apply(this, arguments);
  };
}();

exports.createRole = createRole;

var createMeeting = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var count, role;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Meeting.default.estimatedDocumentCount();

          case 3:
            count = _context2.sent;

            if (!(count > 0)) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return");

          case 6:
            _context2.next = 8;
            return _Role.default.findOne({
              name: 'user'
            });

          case 8:
            role = _context2.sent;
            _context2.next = 11;
            return Promise.all([new _Meeting.default({
              idMeeting: 1,
              name: 'martes'
            }).save(), new _Meeting.default({
              idMeeting: 2,
              name: 'viernes'
            }).save()]);

          case 11:
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));

  return function createMeeting() {
    return _ref2.apply(this, arguments);
  };
}();

exports.createMeeting = createMeeting;

var createDraw = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var count, meeting;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Draw.default.estimatedDocumentCount();

          case 3:
            count = _context3.sent;

            if (!(count > 0)) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return");

          case 6:
            _context3.next = 8;
            return _Meeting.default.findOne({
              idMeeting: 1
            });

          case 8:
            meeting = _context3.sent;
            _context3.next = 11;
            return _Draw.default.create({
              name: "moderator",
              meeting: meeting._id,
              countAsSelected: true
            });

          case 11:
            _context3.next = 13;
            return _Meeting.default.findOne({
              idMeeting: 2
            });

          case 13:
            meeting = _context3.sent;
            Promise.all([new _Draw.default({
              name: "moderator",
              meeting: meeting._id,
              countAsSelected: true
            }).save(), new _Draw.default({
              name: "main presenter",
              meeting: meeting._id,
              countAsSelected: true
            }).save(), new _Draw.default({
              name: "assistant presenter",
              meeting: meeting._id,
              countAsSelected: false
            }).save()]);
            _context3.next = 20;
            break;

          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 17]]);
  }));

  return function createDraw() {
    return _ref3.apply(this, arguments);
  };
}();

exports.createDraw = createDraw;

var createUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var count, role;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _User.default.estimatedDocumentCount();

          case 3:
            count = _context4.sent;

            if (!(count > 0)) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return");

          case 6:
            _context4.next = 8;
            return _Role.default.findOne({
              name: "admin"
            }, '_id');

          case 8:
            role = _context4.sent;
            _context4.t0 = _User.default;
            _context4.next = 12;
            return _argon.default.hash("enter");

          case 12:
            _context4.t1 = _context4.sent;
            _context4.t2 = [role._id];
            _context4.t3 = {
              email: "admin@localhost",
              password: _context4.t1,
              role: _context4.t2
            };
            _context4.next = 17;
            return _context4.t0.create.call(_context4.t0, _context4.t3);

          case 17:
            _context4.next = 19;
            return _Role.default.findOne({
              name: "user"
            }, '_id');

          case 19:
            role = _context4.sent;
            _context4.t4 = Promise;
            _context4.t5 = _User.default;
            _context4.next = 24;
            return _argon.default.hash('enter');

          case 24:
            _context4.t6 = _context4.sent;
            _context4.t7 = [role._id];
            _context4.t8 = {
              email: 'ptorres@novopayment.com',
              password: _context4.t6,
              role: _context4.t7
            };
            _context4.t9 = new _context4.t5(_context4.t8).save();
            _context4.t10 = _User.default;
            _context4.next = 31;
            return _argon.default.hash('enter');

          case 31:
            _context4.t11 = _context4.sent;
            _context4.t12 = [role._id];
            _context4.t13 = {
              email: 'jllerena@novopayment.com',
              password: _context4.t11,
              role: _context4.t12
            };
            _context4.t14 = new _context4.t10(_context4.t13).save();
            _context4.t15 = _User.default;
            _context4.next = 38;
            return _argon.default.hash('enter');

          case 38:
            _context4.t16 = _context4.sent;
            _context4.t17 = [role._id];
            _context4.t18 = {
              email: 'jvega@novopayment.com',
              password: _context4.t16,
              role: _context4.t17
            };
            _context4.t19 = new _context4.t15(_context4.t18).save();
            _context4.t20 = _User.default;
            _context4.next = 45;
            return _argon.default.hash('enter');

          case 45:
            _context4.t21 = _context4.sent;
            _context4.t22 = [role._id];
            _context4.t23 = {
              email: 'epenaloza@novopayment.com',
              password: _context4.t21,
              role: _context4.t22
            };
            _context4.t24 = new _context4.t20(_context4.t23).save();
            _context4.t25 = _User.default;
            _context4.next = 52;
            return _argon.default.hash('enter');

          case 52:
            _context4.t26 = _context4.sent;
            _context4.t27 = [role._id];
            _context4.t28 = {
              email: 'ecabello@novopayment.com',
              password: _context4.t26,
              role: _context4.t27
            };
            _context4.t29 = new _context4.t25(_context4.t28).save();
            _context4.t30 = _User.default;
            _context4.next = 59;
            return _argon.default.hash('enter');

          case 59:
            _context4.t31 = _context4.sent;
            _context4.t32 = [role._id];
            _context4.t33 = {
              email: 'emarmole@novopayment.com',
              password: _context4.t31,
              role: _context4.t32
            };
            _context4.t34 = new _context4.t30(_context4.t33).save();
            _context4.t35 = _User.default;
            _context4.next = 66;
            return _argon.default.hash('enter');

          case 66:
            _context4.t36 = _context4.sent;
            _context4.t37 = [role._id];
            _context4.t38 = {
              email: 'gerodriguez@novopayment.com',
              password: _context4.t36,
              role: _context4.t37
            };
            _context4.t39 = new _context4.t35(_context4.t38).save();
            _context4.t40 = _User.default;
            _context4.next = 73;
            return _argon.default.hash('enter');

          case 73:
            _context4.t41 = _context4.sent;
            _context4.t42 = [role._id];
            _context4.t43 = {
              email: 'hcorredor@novopayment.com',
              password: _context4.t41,
              role: _context4.t42
            };
            _context4.t44 = new _context4.t40(_context4.t43).save();
            _context4.t45 = _User.default;
            _context4.next = 80;
            return _argon.default.hash('enter');

          case 80:
            _context4.t46 = _context4.sent;
            _context4.t47 = [role._id];
            _context4.t48 = {
              email: 'lhernandez@novopayment.com',
              password: _context4.t46,
              role: _context4.t47
            };
            _context4.t49 = new _context4.t45(_context4.t48).save();
            _context4.t50 = _User.default;
            _context4.next = 87;
            return _argon.default.hash('enter');

          case 87:
            _context4.t51 = _context4.sent;
            _context4.t52 = [role._id];
            _context4.t53 = {
              email: 'jcadiz@novopayment.com',
              password: _context4.t51,
              role: _context4.t52
            };
            _context4.t54 = new _context4.t50(_context4.t53).save();
            _context4.t55 = _User.default;
            _context4.next = 94;
            return _argon.default.hash('enter');

          case 94:
            _context4.t56 = _context4.sent;
            _context4.t57 = [role._id];
            _context4.t58 = {
              email: 'dacosta@novopayment.com',
              password: _context4.t56,
              role: _context4.t57
            };
            _context4.t59 = new _context4.t55(_context4.t58).save();
            _context4.t60 = _User.default;
            _context4.next = 101;
            return _argon.default.hash('enter');

          case 101:
            _context4.t61 = _context4.sent;
            _context4.t62 = [role._id];
            _context4.t63 = {
              email: 'ylopez@novopayment.com',
              password: _context4.t61,
              role: _context4.t62
            };
            _context4.t64 = new _context4.t60(_context4.t63).save();
            _context4.t65 = _User.default;
            _context4.next = 108;
            return _argon.default.hash('enter');

          case 108:
            _context4.t66 = _context4.sent;
            _context4.t67 = [role._id];
            _context4.t68 = {
              email: 'lmolina@novopayment.com',
              password: _context4.t66,
              role: _context4.t67
            };
            _context4.t69 = new _context4.t65(_context4.t68).save();
            _context4.t70 = [_context4.t9, _context4.t14, _context4.t19, _context4.t24, _context4.t29, _context4.t34, _context4.t39, _context4.t44, _context4.t49, _context4.t54, _context4.t59, _context4.t64, _context4.t69];
            _context4.next = 115;
            return _context4.t4.all.call(_context4.t4, _context4.t70);

          case 115:
            _context4.next = 120;
            break;

          case 117:
            _context4.prev = 117;
            _context4.t71 = _context4["catch"](0);
            console.log(_context4.t71);

          case 120:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 117]]);
  }));

  return function createUser() {
    return _ref4.apply(this, arguments);
  };
}();

exports.createUser = createUser;