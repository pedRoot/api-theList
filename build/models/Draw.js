"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var drawSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  meeting: {
    ref: "Meeting",
    type: _mongoose.Schema.Types.ObjectId
  },
  user: {
    ref: "User",
    type: _mongoose.Schema.Types.ObjectId
  },
  countAsSelected: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Draw', drawSchema);

exports.default = _default;