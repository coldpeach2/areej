(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "react-parallax-tilt", "framer-motion", "../../styles", "../../constants", "../../utils/motion"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("react-parallax-tilt"), require("framer-motion"), require("../../styles"), require("../../constants"), require("../../utils/motion"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactParallaxTilt, global.framerMotion, global.styles, global.constants, global.motion);
    global.SkillsCard = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _reactParallaxTilt, _framerMotion, _styles, _constants, _motion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  _reactParallaxTilt = _interopRequireDefault(_reactParallaxTilt);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  const SkillsCard = ({
    index,
    title,
    icon
  }) => {
    return /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
      variants: (0, _motion.fadeIn)("right", "spring", index * 0.5, 0.75),
      className: "green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    }, /*#__PURE__*/_react.default.createElement(_reactParallaxTilt.default, {
      tiltMaxAngleX: 10,
      tiltMaxAngleY: 10,
      scale: 1,
      transitionSpeed: 450,
      className: "bg-tertiary p-5 rounded-2xl sm:w-[200px] w-full"
    }, /*#__PURE__*/_react.default.createElement("div", {
      options: {
        max: 45,
        scale: 1,
        speed: 450
      },
      className: "bg-tertiary rounded-[20px] py-5 px-12 h-[100px] flex justify-evenly items-center flex-col"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: icon,
      alt: "web-development",
      className: "w-16 h-16 object-contain"
    }), /*#__PURE__*/_react.default.createElement("h3", {
      className: "text-white text-[20px] font-bold text-center"
    }, title))));
  };
  var _default = SkillsCard;
  _exports.default = _default;
});