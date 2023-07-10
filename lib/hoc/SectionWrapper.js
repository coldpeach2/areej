(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "framer-motion", "../styles", "../utils/motion"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("framer-motion"), require("../styles"), require("../utils/motion"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.framerMotion, global.styles, global.motion);
    global.SectionWrapper = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _framerMotion, _styles, _motion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const SectionWrapper = (Component, idName) => {
    function HOC() {
      return /*#__PURE__*/React.createElement(_framerMotion.motion.section, {
        variants: (0, _motion.staggerContainer)(),
        initial: "hidden",
        whileInView: "show",
        viewport: {
          once: true,
          amount: 0.25
        },
        className: `${_styles.styles.padding} max-w-7xl mx-auto relative z-0`
      }, /*#__PURE__*/React.createElement("span", {
        className: "hash-span",
        id: idName
      }, "\xA0"), /*#__PURE__*/React.createElement(Component, null));
    }
  };
  var _default = SectionWrapper;
  _exports.default = _default;
});