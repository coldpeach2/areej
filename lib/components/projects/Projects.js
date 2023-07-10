(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "react-parallax-tilt", "framer-motion", "../../styles", "../../assets", "../../hoc", "../../constants", "../../utils/motion", "./ProjectsCard"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("react-parallax-tilt"), require("framer-motion"), require("../../styles"), require("../../assets"), require("../../hoc"), require("../../constants"), require("../../utils/motion"), require("./ProjectsCard"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactParallaxTilt, global.framerMotion, global.styles, global.assets, global.hoc, global.constants, global.motion, global.ProjectsCard);
    global.Projects = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _reactParallaxTilt, _framerMotion, _styles, _assets, _hoc, _constants, _motion, _ProjectsCard) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  _reactParallaxTilt = _interopRequireDefault(_reactParallaxTilt);
  _ProjectsCard = _interopRequireDefault(_ProjectsCard);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
  const Projects = () => {
    return /*#__PURE__*/_react.default.createElement("section", {
      className: "projects",
      id: "projects"
    }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: `inset-0 top-[120px]  pt-10 max-w-7xl mx-auto ${_styles.styles.paddingX} flex flex-row items-start gap-5`
    }, /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
      variants: (0, _motion.textVariant)()
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: `${_styles.styles.sectionHeadText}`
    }, "projects")), /*#__PURE__*/_react.default.createElement("div", {
      className: "w-full flex"
    }, /*#__PURE__*/_react.default.createElement(_framerMotion.motion.p, {
      variants: (0, _motion.fadeIn)("", "", 0.1, 1),
      className: "mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
    }, "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."))), /*#__PURE__*/_react.default.createElement("div", {
      className: "mt-20 flex flex-wrap gap-7"
    }, _constants.projects.map((project, index) => /*#__PURE__*/_react.default.createElement(_ProjectsCard.default, _extends({
      key: `project-${index}`,
      index: index
    }, project))))));
  };
  var _default = Projects;
  _exports.default = _default;
});