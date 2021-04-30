"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeById = exports.updateById = exports.show = exports.list = exports.add = void 0;

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.find.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

var _Product = _interopRequireDefault(require("../models/Product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var add = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, category, price, imgURL, product, newRecord;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, category = _req$body.category, price = _req$body.price, imgURL = _req$body.imgURL;
            product = new _Product.default({
              name: name,
              category: category,
              price: price,
              imgURL: imgURL
            });
            _context.next = 5;
            return product.save();

          case 5:
            newRecord = _context.sent;
            res.status(201).json({
              "message": newRecord
            });
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              "message": 'Missing add product...!!!'
            });
            console.error('Error in add Product: ', _context.t0.name + ': ' + _context.t0.message);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function add(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.add = add;

var list = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Product.default.find().then(function (rows) {
              res.status(200).json({
                "message": rows
              });
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function list(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.list = list;

var show = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var product;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Product.default.findById(req.params.id);

          case 3:
            product = _context3.sent;

            if (product) {
              _context3.next = 6;
              break;
            }

            throw new Error('Product not fount !!!');

          case 6:
            res.status(200).json({
              "message": product
            });
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json({
              "message": 'Product not found...!!!'
            });
            console.error('Error in add Product: ', _context3.t0.name + ': ' + _context3.t0.message);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));

  return function show(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.show = show;

var updateById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var product;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Product.default.findByIdAndUpdate(req.params.id, req.body, {
              new: true
            });

          case 3:
            product = _context4.sent;
            res.status(204).json({
              "message": product
            });
            _context4.next = 11;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              "message": 'Product not update...!!!'
            });
            console.error('Error in add Product: ', _context4.t0.name + ': ' + _context4.t0.message);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function updateById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateById = updateById;

var removeById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var product;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _Product.default.findByIdAndRemove(req.params.id);

          case 3:
            product = _context5.sent;
            res.status(204).json({
              "message": req.params.id
            });
            _context5.next = 11;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json({
              "message": 'Product not update...!!!'
            });
            console.error('Error in add Product: ', _context5.t0.name + ': ' + _context5.t0.message);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function removeById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.removeById = removeById;