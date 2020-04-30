"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _apolloBoost = require("apollo-boost");

var _reactHooks = require("@apollo/react-hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query getMovie($id: Int!) {\n    movie(id: $id) {\n      id\n      title\n      medium_cover_image\n      description_intro\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GET_MOVIE = (0, _apolloBoost.gql)(_templateObject());

var _default = function _default() {
  var _useParams = (0, _reactRouterDom.useParams)(),
      id = _useParams.id;

  id = parseInt(id);

  var _useQuery = (0, _reactHooks.useQuery)(GET_MOVIE, {
    variables: {
      id: id
    }
  }),
      loading = _useQuery.loading,
      data = _useQuery.data;

  if (loading) {
    return "loading";
  }

  if (data && data.movie) {
    return data.movie.title;
  }

  return "test";
};

exports["default"] = _default;