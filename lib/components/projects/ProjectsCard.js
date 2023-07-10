import React from "react";
import ParallaxTilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
const ProjectsCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link
}) => {
  return /*#__PURE__*/React.createElement(motion.div, {
    variants: fadeIn("up", "spring", index * 0.5, 0.75)
  }, /*#__PURE__*/React.createElement(ParallaxTilt, {
    tiltMaxAngleX: 10,
    tiltMaxAngleY: 10,
    scale: 1,
    transitionSpeed: 450,
    className: "bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full h-[230px]"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "project_image",
    className: "w-full h-full object-cover rounded-2xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 flex justify-end m-3 card-img_hover"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => window.open(source_code_link, "_blank"),
    className: "black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
  }, /*#__PURE__*/React.createElement("img", {
    src: github,
    alt: "source code",
    className: "w-1/2 h-1/2 object-contain"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-white font-bold text-[24px]"
  }, name), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-secondary text-[14px]"
  }, description)), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex flex-wrap gap-2"
  }, tags.map(tag => /*#__PURE__*/React.createElement("p", {
    key: `${name}-${tag.name}`,
    className: `text-[14px] ${tag.color}`
  }, "#", tag.name)))));
};
export default ProjectsCard;