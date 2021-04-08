"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rulesValidateEdit = void 0;

var _expressValidator = require("express-validator");

var rulesValidateEdit = [(0, _expressValidator.body)('email', 'Email must contain a valid email address').isEmail().notEmpty().bail(), (0, _expressValidator.body)('wasSelected', 'Must contain a valid value').optional().isBoolean().toBoolean(), (0, _expressValidator.body)('isActive', 'Must contain a valid value').optional().isBoolean().toBoolean()];
exports.rulesValidateEdit = rulesValidateEdit;