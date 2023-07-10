(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "react-parallax-tilt", "framer-motion", "../../styles", "../../constants", "../../utils/motion", "./SkillsCard"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("react-parallax-tilt"), require("framer-motion"), require("../../styles"), require("../../constants"), require("../../utils/motion"), require("./SkillsCard"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactParallaxTilt, global.framerMotion, global.styles, global.constants, global.motion, global.SkillsCard);
    global.Skills = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _reactParallaxTilt, _framerMotion, _styles, _constants, _motion, _SkillsCard) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  _reactParallaxTilt = _interopRequireDefault(_reactParallaxTilt);
  _SkillsCard = _interopRequireDefault(_SkillsCard);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
  const Skills = () => {
    return /*#__PURE__*/_react.default.createElement("section", {
      className: "skills",
      id: "skills"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: `inset-0 top-[120px]  pt-10 max-w-7xl mx-auto ${_styles.styles.paddingX} flex flex-row items-start gap-5`
    }, /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
      className: "max-w-containerSmall mx-50 py-50 px-50 lgl:py-32 flex flex-col gap-8 items-center"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "text-3xl text-textDark font-semibold flex"
    }, "skills"), /*#__PURE__*/_react.default.createElement("div", {
      className: "flex flex-wrap gap-10  items-center"
    }, _constants.skills.map((skill, index) => /*#__PURE__*/_react.default.createElement(_SkillsCard.default, _extends({
      key: skill.title,
      index: index
    }, skill)) // for each service we want to render a custom service card
    )))));
  };
  var _default = Skills;
  _exports.default = _default;
});