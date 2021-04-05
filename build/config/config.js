"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Application property
var _default = {
  SECRET: '7bc78545b1amSNEtVPhx159E1qUxY7enwMgFHjgUb9',
  ACCESS_RULE: {
    "GET": ["user", "moderator", "admin"],
    "POST": ["moderator", "admin"],
    "PUT": ["moderator", "admin"],
    "DELETE": ["admin"]
  }
};
exports.default = _default;