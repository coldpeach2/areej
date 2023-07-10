(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "framer-motion", "../styles", "../utils/motion", "react-ts-typewriter"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("framer-motion"), require("../styles"), require("../utils/motion"), require("react-ts-typewriter"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.framerMotion, global.styles, global.motion, global.reactTsTypewriter);
    global.Home = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _framerMotion, _styles, _motion, _reactTsTypewriter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _reactTsTypewriter = _interopRequireDefault(_reactTsTypewriter);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  const Home = () => {
    return /*#__PURE__*/React.createElement("section", {
      className: `relative w-full h-screen mx-auto`
    }, /*#__PURE__*/React.createElement("div", {
      className: `absolute inset-0 top-[120px]  max-w-7xl mx-auto ${_styles.styles.paddingX} flex flex-row items-start gap-5`
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col justify-center items-center mt-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-5 h-5 rounded-full bg-[#e85fcc]"
    }), /*#__PURE__*/React.createElement("div", {
      className: "w-1 sm:h-80 h-40 pink-gradient"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_framerMotion.motion.h1, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      transition: {
        duration: 0.5,
        delay: 0.5
      },
      className: "text-3xl lgl:text-5xl font-titleFont font-semibold flex flex-col"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-pink-400"
    }, /*#__PURE__*/React.createElement(_reactTsTypewriter.default, {
      text: "hi, I'm areej! "
    }))), /*#__PURE__*/React.createElement(_framerMotion.motion.h2, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      transition: {
        duration: 0.8,
        delay: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-2xl text-textDark mt-2 lgl:mt-4"
    }, " Aspiring Junior developer")), /*#__PURE__*/React.createElement(_framerMotion.motion.p, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      transition: {
        duration: 0.8,
        delay: 1.5
      },
      className: "mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    }, "My passion for coding has led me to gain experience in developing a variety of web applications using frameworks such as Spring Boot, Django, Flask, and MERN. I am constantly seeking to expand my knowledge and stay up-to-date with the latest trends and technologies in the field. With my strong problem-solving abilities and attention to detail, I am confident in my ability to tackle complex challenges and deliver high-quality solutions."))));
  };
  var _default = Home;
  _exports.default = _default;
});