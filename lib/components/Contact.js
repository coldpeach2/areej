(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "framer-motion", "@emailjs/browser", "../styles", "../hoc", "../utils/motion"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("framer-motion"), require("@emailjs/browser"), require("../styles"), require("../hoc"), require("../utils/motion"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.framerMotion, global.browser, global.styles, global.hoc, global.motion);
    global.Contact = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _framerMotion, _browser, _styles, _hoc, _motion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireWildcard(_react);
  _browser = _interopRequireDefault(_browser);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
  const Contact = () => {
    const formRef = (0, _react.useRef)();
    const [form, setForm] = (0, _react.useState)({
      name: "",
      email: "",
      message: ""
    });
    const [loading, setLoading] = (0, _react.useState)(false);
    const handleChange = e => {
      const {
        target
      } = e;
      const {
        name,
        value
      } = target;
      setForm({
        ...form,
        [name]: value
      });
    };
    const handleSubmit = e => {
      e.preventDefault();
      setLoading(true);
      _browser.default.send(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, {
        from_name: form.name,
        to_name: "Areej",
        from_email: form.email,
        to_email: "areejnegm@gmail.com",
        message: form.message
      }, import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY).then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        setForm({
          name: "",
          email: "",
          message: ""
        });
      }, error => {
        setLoading(false);
        console.error(error);
        alert("Ahh, something went wrong. Please try again.");
      });
    };
    return /*#__PURE__*/_react.default.createElement("section", {
      className: "contact",
      id: "contact"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: `inset-0 top-[120px]  pt-10 max-w-7xl mx-auto ${_styles.styles.paddingX} flex flex-row items-start gap-5`
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: `xl:mt-12 pt-10 flex xl:flex-row gap-10 overflow-hidden`
    }, /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
      variants: (0, _motion.slideIn)("left", "tween", 0.2, 1),
      className: "flex-[0.60] bg-black-100 p-8 rounded-2xl"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: _styles.styles.sectionSubText
    }, "Get in touch"), /*#__PURE__*/_react.default.createElement("h3", {
      className: "text-3xl text-textDark font-semibold flex"
    }, "Contact."), /*#__PURE__*/_react.default.createElement("form", {
      ref: formRef,
      onSubmit: handleSubmit,
      className: "mt-12 flex flex-col gap-8"
    }, /*#__PURE__*/_react.default.createElement("label", {
      className: "flex flex-col"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "text-white font-medium mb-4"
    }, "Your Name"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      name: "name",
      value: form.name,
      onChange: handleChange,
      placeholder: "What's your name?",
      className: "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    })), /*#__PURE__*/_react.default.createElement("label", {
      className: "flex flex-col"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "text-white font-medium mb-4"
    }, "Your email"), /*#__PURE__*/_react.default.createElement("input", {
      type: "email",
      name: "email",
      value: form.email,
      onChange: handleChange,
      placeholder: "What's your email address?",
      className: "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    })), /*#__PURE__*/_react.default.createElement("label", {
      className: "flex flex-col"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "text-white font-medium mb-4"
    }, "Your Message"), /*#__PURE__*/_react.default.createElement("textarea", {
      rows: 7,
      name: "message",
      value: form.message,
      onChange: handleChange,
      placeholder: "What do you want to say?",
      className: "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    })), /*#__PURE__*/_react.default.createElement("button", {
      type: "submit",
      className: "bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
    }, loading ? "Sending..." : "Send"))), /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
      variants: (0, _motion.slideIn)("right", "tween", 0.2, 1),
      className: "xl:flex-1 xl:h-auto md:h-[550px] h-[1px]"
    }))));
  };
  var _default = Contact;
  _exports.default = _default;
});