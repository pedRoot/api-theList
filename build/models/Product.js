"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.number.constructor.js");

var _mongoose = require("mongoose");

var productSchema = new _mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  imgURL: String
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Product', productSchema);

exports.default = _default;