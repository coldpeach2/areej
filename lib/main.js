(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "react-dom/client", "./App.jsx", "./index.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("react-dom/client"), require("./App.jsx"), require("./index.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.client, global.App, global.index);
    global.main = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_react, _client, _App, _index) {
  "use strict";

  _react = _interopRequireDefault(_react);
  _client = _interopRequireDefault(_client);
  _App = _interopRequireDefault(_App);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  _client.default.createRoot(document.getElementById('root')).render( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_App.default, null)));
});