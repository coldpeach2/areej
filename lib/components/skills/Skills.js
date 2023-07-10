function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import ParallaxTilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { skills } from '../../constants';
import { fadeIn, textVariant } from '../../utils/motion';
import SkillsCard from './SkillsCard';
const Skills = () => {
  return /*#__PURE__*/React.createElement("section", {
    className: "skills",
    id: "skills"
  }, /*#__PURE__*/React.createElement("div", {
    className: `inset-0 top-[120px]  pt-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`
  }, /*#__PURE__*/React.createElement(motion.div, {
    className: "max-w-containerSmall mx-50 py-50 px-50 lgl:py-32 flex flex-col gap-8 items-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl text-textDark font-semibold flex"
  }, "skills"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-10  items-center"
  }, skills.map((skill, index) => /*#__PURE__*/React.createElement(SkillsCard, _extends({
    key: skill.title,
    index: index
  }, skill)) // for each service we want to render a custom service card
  )))));
};

export default Skills;