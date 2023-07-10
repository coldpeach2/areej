import React from 'react'
import ParallaxTilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../../styles'
import { skills } from '../../constants'
import { fadeIn, textVariant } from '../../utils/motion'
import SkillsCard from './SkillsCard'

const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <div
        className={`inset-0 top-[120px]  pt-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
      <motion.div className='max-w-containerSmall mx-50 py-50 px-50 lgl:py-32 flex flex-col gap-8 items-center'>
      <h2 className="text-3xl text-textDark font-semibold flex">skills</h2>
        <div className='flex flex-wrap gap-10  items-center'>
        {skills.map((skill, index) => (
          <SkillsCard key={skill.title} index={index} {...skill} /> // for each service we want to render a custom service card
        ))}
      </div>
      </motion.div>
      </div>
    </section>
  )
}

export default Skills