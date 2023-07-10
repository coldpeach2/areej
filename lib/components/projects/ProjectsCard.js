(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "react-parallax-tilt", "framer-motion", "../../styles", "../../assets", "../../hoc", "../../constants", "../../utils/motion"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("react-parallax-tilt"), require("framer-motion"), require("../../styles"), require("../../assets"), require("../../hoc"), require("../../constants"), require("../../utils/motion"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactParallaxTilt, global.framerMotion, global.styles, global.assets, global.hoc, global.constants, global.motion);
    global.ProjectsCard = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _reactParallaxTilt, _framerMotion, _styles, _assets, _hoc, _constants, _motion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  _reactParallaxTilt = _interopRequireDefault(_reactParallaxTilt);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  const ProjectsCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link
  }) => {
    return /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
      variants: (0, _motion.fadeIn)("up", "spring", index * 0.5, 0.75)
    }, /*#__PURE__*/_react.default.createElement(_reactParallaxTilt.default, {
      tiltMaxAngleX: 10,
      tiltMaxAngleY: 10,
      scale: 1,
      transitionSpeed: 450,
      className: "bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "relative w-full h-[230px]"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: image,
      alt: "project_image",
      className: "w-full h-full object-cover rounded-2xl"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "absolute inset-0 flex justify-end m-3 card-img_hover"
    }, /*#__PURE__*/_react.default.createElement("div", {
      onClick: () => window.open(source_code_link, "_blank"),
      className: "black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _assets.github,
      alt: "source code",
      className: "w-1/2 h-1/2 object-contain"
    })))), /*#__PURE__*/_react.default.createElement("div", {
      className: "mt-5"
    }, /*#__PURE__*/_react.default.createElement("h3", {
      className: "text-white font-bold text-[24px]"
    }, name), /*#__PURE__*/_react.default.createElement("p", {
      className: "mt-2 text-secondary text-[14px]"
    }, description)), /*#__PURE__*/_react.default.createElement("div", {
      className: "mt-4 flex flex-wrap gap-2"
    }, tags.map(tag => /*#__PURE__*/_react.default.createElement("p", {
      key: `${name}-${tag.name}`,
      className: `text-[14px] ${tag.color}`
    }, "#", tag.name)))));
  };
  var _default = ProjectsCard;
  _exports.default = _default;
});