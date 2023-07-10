(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./SectionWrapper"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./SectionWrapper"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.SectionWrapper);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _SectionWrapper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "SectionWrapper", {
    enumerable: true,
    get: function () {
      return _SectionWrapper.default;
    }
  });
  _SectionWrapper = _interopRequireDefault(_SectionWrapper);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});