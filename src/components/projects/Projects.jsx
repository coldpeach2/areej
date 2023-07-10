import React from "react";
import ParallaxTilt from 'react-parallax-tilt'
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import ProjectsCard from "./ProjectsCard";


const Projects = () => {
  return (
    <section className="projects" id="projects">
    <>
    <div
        className={`inset-0 top-[120px]  pt-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectsCard key={`project-${index}`} index={index} {...project} />
        ))}
       </div>
       
    </>
    </section>
  );
};

export default Projects