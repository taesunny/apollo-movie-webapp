"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_reactRouterDom=require("react-router-dom"),_apolloBoost=require("apollo-boost"),_reactHooks=require("@apollo/react-hooks"),_styledComponents=_interopRequireDefault(require("styled-components"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _templateObject(){var e=_taggedTemplateLiteral(["\n  query getMovie($id: Int!) {\n    movie(id: $id) {\n      title\n      medium_cover_image\n      language\n      rating\n      description_intro\n    }\n  }\n"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t=t||e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var GET_MOVIE=(0,_apolloBoost.gql)(_templateObject()),_default=function(){var e=(0,_reactRouterDom.useParams)().id;e=parseInt(e);var t=(0,_reactHooks.useQuery)(GET_MOVIE,{variables:{id:e}}),r=t.loading,o=t.data;return r?"loading":o&&o.movie?o.movie.title:"test"};exports.default=_default;