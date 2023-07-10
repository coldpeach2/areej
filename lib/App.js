(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react-router-dom", "./components"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react-router-dom"), require("./components"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactRouterDom, global.components);
    global.App = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _reactRouterDom, _components) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom

  const App = () => {
    return /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement("div", {
      className: "relative z-0 bg-primary"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-hero-pattern bg-cover bg-no-repeat bg-center"
    }, /*#__PURE__*/React.createElement(_components.Navbar, null), /*#__PURE__*/React.createElement(_components.Home, null)), /*#__PURE__*/React.createElement(_components.Skills, null), /*#__PURE__*/React.createElement(_components.Projects, null), /*#__PURE__*/React.createElement(_components.Contact, null)));
  };
  var _default = App;
  _exports.default = _default;
});