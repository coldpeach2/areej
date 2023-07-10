function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from "react";
import ParallaxTilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import ProjectsCard from "./ProjectsCard";
const Projects = () => {
  return /*#__PURE__*/React.createElement("section", {
    className: "projects",
    id: "projects"
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `inset-0 top-[120px]  pt-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`
  }, /*#__PURE__*/React.createElement(motion.div, {
    variants: textVariant()
  }, /*#__PURE__*/React.createElement("h2", {
    className: `${styles.sectionHeadText}`
  }, "projects")), /*#__PURE__*/React.createElement("div", {
    className: "w-full flex"
  }, /*#__PURE__*/React.createElement(motion.p, {
    variants: fadeIn("", "", 0.1, 1),
    className: "mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
  }, "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."))), /*#__PURE__*/React.createElement("div", {
    className: "mt-20 flex flex-wrap gap-7"
  }, projects.map((project, index) => /*#__PURE__*/React.createElement(ProjectsCard, _extends({
    key: `project-${index}`,
    index: index
  }, project))))));
};
export default Projects;