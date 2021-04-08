"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.manageResponse = manageResponse;

var _expressValidator = require("express-validator");

function manageResponse(req, res, next) {
  try {
    (0, _expressValidator.validationResult)(req).throw();
    next();
  } catch (err) {
    res.status(422).json({
      errors: err.mapped()
    });
  }
}

;