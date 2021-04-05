"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.number.constructor.js");

var _mongoose = require("mongoose");

var meetingSchema = new _mongoose.Schema({
  idMeeting: {
    type: Number
  },
  name: {
    type: String,
    unique: true,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Meeting', meetingSchema);

exports.default = _default;