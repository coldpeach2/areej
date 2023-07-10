import { BrowserRouter } from "react-router-dom";
import { Contact, Home, Navbar, Projects, Skills } from './components';
// npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom

const App = () => {
  return /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement("div", {
    className: "relative z-0 bg-primary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-hero-pattern bg-cover bg-no-repeat bg-center"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(Home, null)), /*#__PURE__*/React.createElement(Skills, null), /*#__PURE__*/React.createElement(Projects, null), /*#__PURE__*/React.createElement(Contact, null)));
};
export default App;