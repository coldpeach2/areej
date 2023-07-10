(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Home", "./Navbar", "./skills/Skills", "./Experience", "./projects/Projects", "./Contact"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Home"), require("./Navbar"), require("./skills/Skills"), require("./Experience"), require("./projects/Projects"), require("./Contact"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Home, global.Navbar, global.Skills, global.Experience, global.Projects, global.Contact);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _Home, _Navbar, _Skills, _Experience, _Projects, _Contact) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Contact", {
    enumerable: true,
    get: function () {
      return _Contact.default;
    }
  });
  Object.defineProperty(_exports, "Experience", {
    enumerable: true,
    get: function () {
      return _Experience.default;
    }
  });
  Object.defineProperty(_exports, "Home", {
    enumerable: true,
    get: function () {
      return _Home.default;
    }
  });
  Object.defineProperty(_exports, "Navbar", {
    enumerable: true,
    get: function () {
      return _Navbar.default;
    }
  });
  Object.defineProperty(_exports, "Projects", {
    enumerable: true,
    get: function () {
      return _Projects.default;
    }
  });
  Object.defineProperty(_exports, "Skills", {
    enumerable: true,
    get: function () {
      return _Skills.default;
    }
  });
  _Home = _interopRequireDefault(_Home);
  _Navbar = _interopRequireDefault(_Navbar);
  _Skills = _interopRequireDefault(_Skills);
  _Experience = _interopRequireDefault(_Experience);
  _Projects = _interopRequireDefault(_Projects);
  _Contact = _interopRequireDefault(_Contact);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});