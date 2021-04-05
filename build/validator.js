"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.catchError = exports.userShow = exports.userEdit = void 0;

require("core-js/modules/es.array.map.js");

var _expressValidator = require("express-validator");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var userEdit = function userEdit() {
  return [(0, _expressValidator.body)('email', 'Invalid email').exists().isEmail(), (0, _expressValidator.body)('wasSelected', 'Value not is valid').optional().isBoolean(), (0, _expressValidator.body)('isActive', 'Value not is valid').optional().isBoolean()];
};

exports.userEdit = userEdit;

var userShow = function userShow() {
  return [(0, _expressValidator.body)('email', 'Invalid email').optional().isEmail()];
};

exports.userShow = userShow;

var catchError = function catchError(req, res, next) {
  var errors = (0, _expressValidator.validationResult)(req);

  if (errors.isEmpty()) {
    return next();
  }

  var extractedErrors = [];
  errors.array().map(function (err) {
    return extractedErrors.push(_defineProperty({}, err.param, err.msg));
  });
  return res.status(422).json({
    errors: extractedErrors
  });
};

exports.catchError = catchError;