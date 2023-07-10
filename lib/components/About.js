(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "react-parallax-tilt", "framer-motion", "../styles", "../constants", "../utils/motion", "../hoc"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("react-parallax-tilt"), require("framer-motion"), require("../styles"), require("../constants"), require("../utils/motion"), require("../hoc"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactParallaxTilt, global.framerMotion, global.styles, global.constants, global.motion, global.hoc);
    global.About = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _reactParallaxTilt, _framerMotion, _styles, _constants, _motion, _hoc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  _reactParallaxTilt = _interopRequireDefault(_reactParallaxTilt);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
  const ServiceCard = ({
    index,
    title,
    icon
  }) => {
    return /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
      variants: (0, _motion.fadeIn)("right", "spring", index * 0.5, 0.75),
      className: "w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    }, /*#__PURE__*/_react.default.createElement(_reactParallaxTilt.default, {
      tiltMaxAngleX: 10,
      tiltMaxAngleY: 10,
      scale: 1,
      transitionSpeed: 450,
      className: "bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    }, /*#__PURE__*/_react.default.createElement("div", {
      options: {
        max: 45,
        scale: 1,
        speed: 450
      },
      className: "bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: icon,
      alt: "web-development",
      className: "w-16 h-16 object-contain"
    }), /*#__PURE__*/_react.default.createElement("h3", {
      className: "text-white text-[20px] font-bold text-center"
    }, title))));
  };
  const About = () => {
    return /*#__PURE__*/_react.default.createElement("section", {
      className: "about",
      id: "about"
    }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
      variants: (0, _motion.textVariant)()
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: _styles.styles.sectionSubText
    }, " Introduction "), /*#__PURE__*/_react.default.createElement("h2", {
      className: _styles.styles.sectionHeadText
    }, "Overview")), /*#__PURE__*/_react.default.createElement(_framerMotion.motion.p, {
      variants: (0, _motion.fadeIn)("", "", 0.1, 1),
      className: "mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    }, "My passion for coding has led me to gain experience in developing a variety of web applications using frameworks such as Spring Boot, Django, Flask, and MERN. I am constantly seeking to expand my knowledge and stay up-to-date with the latest trends and technologies in the field. With my strong problem-solving abilities and attention to detail, I am confident in my ability to tackle complex challenges and deliver high-quality solutions."), /*#__PURE__*/_react.default.createElement("div", {
      className: "mt-20 flex flex-wrap gap-10"
    }, _constants.services.map((service, index) => /*#__PURE__*/_react.default.createElement(ServiceCard, _extends({
      key: service.title,
      index: index
    }, service)) // for each service we want to render a custom service card
    ))));
  };
  var _default = About;
  _exports.default = _default;
});