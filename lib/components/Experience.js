(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "react-vertical-timeline-component", "framer-motion", "react-vertical-timeline-component/style.min.css", "../styles", "../constants", "../hoc", "../utils/motion"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("react-vertical-timeline-component"), require("framer-motion"), require("react-vertical-timeline-component/style.min.css"), require("../styles"), require("../constants"), require("../hoc"), require("../utils/motion"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactVerticalTimelineComponent, global.framerMotion, global.styleMin, global.styles, global.constants, global.hoc, global.motion);
    global.Experience = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _reactVerticalTimelineComponent, _framerMotion, _styleMin, _styles, _constants, _hoc, _motion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  const ExperienceCard = ({
    experience
  }) => {
    return /*#__PURE__*/_react.default.createElement(_reactVerticalTimelineComponent.VerticalTimelineElement, {
      contentStyle: {
        background: "#1d1836",
        color: "#fff"
      },
      contentArrowStyle: {
        borderRight: "7px solid  #232631"
      },
      date: experience.date,
      iconStyle: {
        background: experience.iconBg
      },
      icon: /*#__PURE__*/_react.default.createElement("div", {
        className: "flex justify-center items-center w-full h-full"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: experience.icon,
        alt: experience.company_name,
        className: "w-[60%] h-[60%] object-contain"
      }))
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", {
      className: "text-white text-[24px] font-bold"
    }, experience.title), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-secondary text-[16px] font-semibold",
      style: {
        margin: 0
      }
    }, experience.company_name)), /*#__PURE__*/_react.default.createElement("ul", {
      className: "mt-5 list-disc ml-5 space-y-2"
    }, experience.points.map((point, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: `experience-point-${index}`,
      className: "text-white-100 text-[14px] pl-1 tracking-wider"
    }, point))));
  };
  const Experience = () => {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
      variants: (0, _motion.textVariant)()
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: `${_styles.styles.sectionHeadText} text-center`
    }, "Experience")), /*#__PURE__*/_react.default.createElement("div", {
      className: "mt-20 flex flex-col"
    }, /*#__PURE__*/_react.default.createElement(_reactVerticalTimelineComponent.VerticalTimeline, null, _constants.experiences.map((experience, index) => /*#__PURE__*/_react.default.createElement(ExperienceCard, {
      key: `experience-${index}`,
      experience: experience
    })))));
  };
  var _default = Experience;
  _exports.default = _default;
});