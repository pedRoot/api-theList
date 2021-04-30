"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reset = exports.list = exports.generate = void 0;

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.array.find.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.splice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _User = _interopRequireDefault(require("../models/User"));

var _Draw = _interopRequireDefault(require("../models/Draw"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var generate = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var quorum, theList, positions, promisesPotitions;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _User.default.find({
              $and: [{
                wasSelected: false
              }, {
                isActive: true
              }, {
                email: {
                  $ne: 'admin@localhost'
                }
              }]
            });

          case 3:
            quorum = _context2.sent;

            if (!(quorum.length < 1)) {
              _context2.next = 6;
              break;
            }

            throw new Error('There are no more users to select, reset draw');

          case 6:
            theList = quorum.map(function (obj) {
              return obj._id;
            });
            _context2.next = 9;
            return _Draw.default.find().populate('meeting', ['name']);

          case 9:
            positions = _context2.sent;

            if (!(quorum.length < positions.length)) {
              _context2.next = 12;
              break;
            }

            throw new Error('There are no more users to select, reset draw');

          case 12:
            promisesPotitions = positions.map( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(positionOfMeeting) {
                var indexElement, randomElement, index, userSelected;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        indexElement = 0;

                        if (theList.length > 0) {
                          indexElement = Math.floor(Math.random() * theList.length);
                        }

                        randomElement = theList[indexElement];
                        index = theList.indexOf(randomElement);

                        if (index > -1) {
                          theList.splice(index, 1);
                        }

                        positionOfMeeting.user = randomElement;
                        _context.next = 8;
                        return positionOfMeeting.save();

                      case 8:
                        _context.next = 10;
                        return _User.default.findByIdAndUpdate(randomElement, {
                          wasSelected: positionOfMeeting.countAsSelected
                        }, {
                          new: true
                        });

                      case 10:
                        userSelected = _context.sent;
                        return _context.abrupt("return", {
                          meeting: positionOfMeeting.meeting.name,
                          position: positionOfMeeting.name,
                          email: userSelected.email
                        });

                      case 12:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }());
            Promise.all(promisesPotitions).then(function (results) {
              return res.status(200).json(results);
            });
            _context2.next = 20;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](0);
            console.error('Missing generate draw...!!!', _context2.t0);
            res.status(500).json({
              "message": _context2.t0.message
            });

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 16]]);
  }));

  return function generate(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.generate = generate;

var list = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var authoritie, draw;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Draw.default.find({
              user: {
                $exists: true,
                $ne: null
              }
            }).populate("user", ["email"]).populate("meeting", ["name"]);

          case 3:
            authoritie = _context3.sent;

            if (!(authoritie.length < 1)) {
              _context3.next = 6;
              break;
            }

            throw new Error('Draw empty...!!!');

          case 6:
            draw = authoritie.map(function (row) {
              var user = row.user;
              var meeting = row.meeting;
              return {
                role: row.name,
                meeting: meeting.name,
                assingTo: user.email
              };
            });
            res.status(200).json({
              draw: draw
            });
            _context3.next = 14;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            console.error('Missing list draw...!!!', _context3.t0);
            res.status(500).json({
              "message": _context3.t0.message
            });

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function list(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

exports.list = list;

var reset = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _User.default.updateMany({
              wasSelected: false
            });

          case 3:
            _context4.next = 5;
            return _Draw.default.updateMany({
              user: null
            });

          case 5:
            res.status(202).json();
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.error('Missing reset draws...!!!', _context4.t0);
            res.status(500).json({
              "message": _context4.t0.message
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function reset(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();

exports.reset = reset;