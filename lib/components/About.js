function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import ParallaxTilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
const ServiceCard = ({
  index,
  title,
  icon
}) => {
  return /*#__PURE__*/React.createElement(motion.div, {
    variants: fadeIn("right", "spring", index * 0.5, 0.75),
    className: "w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
  }, /*#__PURE__*/React.createElement(ParallaxTilt, {
    tiltMaxAngleX: 10,
    tiltMaxAngleY: 10,
    scale: 1,
    transitionSpeed: 450,
    className: "bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
  }, /*#__PURE__*/React.createElement("div", {
    options: {
      max: 45,
      scale: 1,
      speed: 450
    },
    className: "bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
  }, /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "web-development",
    className: "w-16 h-16 object-contain"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-white text-[20px] font-bold text-center"
  }, title))));
};
const About = () => {
  return /*#__PURE__*/React.createElement("section", {
    className: "about",
    id: "about"
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(motion.div, {
    variants: textVariant()
  }, /*#__PURE__*/React.createElement("p", {
    className: styles.sectionSubText
  }, " Introduction "), /*#__PURE__*/React.createElement("h2", {
    className: styles.sectionHeadText
  }, "Overview")), /*#__PURE__*/React.createElement(motion.p, {
    variants: fadeIn("", "", 0.1, 1),
    className: "mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
  }, "My passion for coding has led me to gain experience in developing a variety of web applications using frameworks such as Spring Boot, Django, Flask, and MERN. I am constantly seeking to expand my knowledge and stay up-to-date with the latest trends and technologies in the field. With my strong problem-solving abilities and attention to detail, I am confident in my ability to tackle complex challenges and deliver high-quality solutions."), /*#__PURE__*/React.createElement("div", {
    className: "mt-20 flex flex-wrap gap-10"
  }, services.map((service, index) => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: service.title,
    index: index
  }, service)) // for each service we want to render a custom service card
  ))));
};

export default About;