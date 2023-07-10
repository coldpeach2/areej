(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "react-router-dom", "../styles", "../constants", "../assets", "framer-motion"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("react-router-dom"), require("../styles"), require("../constants"), require("../assets"), require("framer-motion"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactRouterDom, global.styles, global.constants, global.assets, global.framerMotion);
    global.Navbar = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _reactRouterDom, _styles, _constants, _assets, _framerMotion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireWildcard(_react);
  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
  const Navbar = () => {
    const [active, setActive] = (0, _react.useState)("");
    const [toggle, setToggle] = (0, _react.useState)(false);
    const [scrolled, setScrolled] = (0, _react.useState)(false);
    (0, _react.useEffect)(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return /*#__PURE__*/_react.default.createElement("nav", {
      className: `${_styles.styles.paddingX} w-full flex 
    items-center py-5 fixed top-0 z-20 bg-primary ${scrolled ? "bg-primary" : "bg-transparent"}`
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "w-full flex justify-between items-center max-w-7xl mx-auto"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/",
      className: "flex items-center gap-2",
      onClick: () => {
        setActive(""); // keeps track of where we are currently on the page
        window.scrollTo(0, 0); // scroll to the top of the page when clicked
      }
    }, /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
      initial: {
        y: -10,
        opacity: 0
      },
      animate: {
        y: 0,
        opacity: 1
      },
      transition: {
        duration: 0.8,
        delay: 0.25
      }
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "text-white text-[18px] font-bold cursor-pointer flex "
    }, "Areej"))), /*#__PURE__*/_react.default.createElement("ul", {
      className: "list-none hidden sm:flex flex-row gap-10"
    }, _constants.navLinks.map((nav, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: nav.id,
      className: `${active === nav.title ? "text-white" : "text-secondary"} 
                  font-poppins font-medium cursor-pointer text-[16px]`,
      onClick: () => {
        setToggle(!toggle);
        setActive(nav.title);
      }
    }, /*#__PURE__*/_react.default.createElement(_framerMotion.motion.li, {
      initial: {
        y: -10,
        opacity: 0
      },
      animate: {
        y: 0,
        opacity: 1
      },
      transition: {
        duration: 0.5,
        delay: index * 0.50
      }
    }, " ", /*#__PURE__*/_react.default.createElement("a", {
      href: `#${nav.id}`
    }, " ", nav.title, " ")))), /*#__PURE__*/_react.default.createElement("a", {
      href: "/assets/resume523.pdf",
      target: "_blank"
    }, /*#__PURE__*/_react.default.createElement(_framerMotion.motion.button, {
      initial: {
        y: -10,
        opacity: 0
      },
      animate: {
        y: 0,
        opacity: 1
      },
      transition: {
        duration: 0.5,
        delay: 1.50
      },
      className: " text-secondary font-poppins font-medium cursor-pointer text-[16px]"
    }, "Resume"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "sm:hidden flex flex-1 justify-end items-center"
    }, /*#__PURE__*/_react.default.createElement("img", {
      // handle for mobile devices
      src: toggle ? _assets.close : _assets.menu,
      alt: "menu",
      className: "w-[28px] h-[28px] object-contain",
      onClick: () => setToggle(!toggle)
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: `${!toggle ? "hidden" : "flex" // if toggle is false, hid it, otherwise show it
      } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`
    }, /*#__PURE__*/_react.default.createElement("ul", {
      className: "list-none flex justify-end items-start flex-1 flex-col gap-4"
    }, _constants.navLinks.map(nav => /*#__PURE__*/_react.default.createElement("li", {
      key: nav.id,
      className: `${active === nav.title ? "text-white" : "text-secondary"} 
                  font-poppins font-medium cursor-pointer text-[16px]`,
      onClick: () => {
        setToggle(!toggle);
        setActive(nav.title);
      }
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: `#${nav.id}`
    }, " ", nav.title, " "))), /*#__PURE__*/_react.default.createElement("a", {
      href: "/assets/resume523.pdf",
      target: "_blank"
    }, /*#__PURE__*/_react.default.createElement(_framerMotion.motion.button, {
      initial: {
        y: -10,
        opacity: 0
      },
      animate: {
        y: 0,
        opacity: 1
      },
      transition: {
        duration: 0.5,
        delay: 1.50
      },
      className: " text-secondary font-poppins font-medium cursor-pointer text-[16px]"
    }, "Resume")))))));
  };
  var _default = Navbar;
  _exports.default = _default;
});