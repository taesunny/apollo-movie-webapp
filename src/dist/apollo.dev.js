"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloBoost = _interopRequireDefault(require("apollo-boost"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = new _apolloBoost.default({
  uri: "https://movieql.now.sh/"
});
var _default = client;
exports.default = _default;