"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Configuring the database
_mongoose.default.set('useFindAndModify', false);

_mongoose.default.connect("mongodb+srv://dbNovo:Novo.2020@cluster0.j9tlz.mongodb.net/theList?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(function (db) {
  return console.log('DB is connect :) ');
}).catch(function (e) {
  return console.log(e);
});

var _default = _mongoose.default;
exports.default = _default;