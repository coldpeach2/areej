import React from 'react'
import ParallaxTilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../../styles'
import { skills } from '../../constants'
import { fadeIn, textVariant } from '../../utils/motion'


const SkillsCard = ({ index, title, icon }) => {
    return (
      <motion.div 
        variants={fadeIn("right", "spring", index * 0.5, 0.75)} 
        className='green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <ParallaxTilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl sm:w-[200px] w-full" 
      >
       <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 h-[100px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />
  
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </ParallaxTilt>
    </motion.div>
    )
  }
  export default SkillsCard
