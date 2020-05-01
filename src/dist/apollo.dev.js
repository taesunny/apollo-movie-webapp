"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloBoost = _interopRequireDefault(require("apollo-boost"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var client = new _apolloBoost["default"]({
  uri: "http://localhost:4000/",
  resolvers: {
    Movie: {
      isLiked: function isLiked() {
        return false;
      }
    },
    Mutation: {
      toggleLikeMovie: function toggleLikeMovie(_, _ref, _ref2) {
        var id = _ref.id,
            isLiked = _ref.isLiked;
        var cache = _ref2.cache;
        cache.writeData({
          id: "Movie:".concat(id),
          data: {
            isLiked: !isLiked
          }
        });
      }
    }
  }
});
var _default = client;
exports["default"] = _default;