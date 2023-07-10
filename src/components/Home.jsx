import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from '../utils/motion'
import Typewriter from 'react-ts-typewriter'

const Home = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#e85fcc]' />
          <div className='w-1 sm:h-80 h-40 pink-gradient' />
        </div>

        <div>
        <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5}}
            className='text-3xl lgl:text-5xl font-titleFont font-semibold flex flex-col'
          >
            <span className='text-pink-400'>
            <Typewriter text="hi, I'm areej! "/>

            </span>
            </motion.h1>
            <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1}}
          >
              <span
              className='text-2xl text-textDark mt-2 lgl:mt-4'
              > Aspiring Junior developer
              </span>
        </motion.h2>
          <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5}}
              className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
            My passion for coding has led me to gain experience in developing a 
            variety of web applications using frameworks such as Spring Boot, 
            Django, Flask, and MERN. I am constantly seeking to expand my knowledge 
            and stay up-to-date with the latest trends and technologies in the field. 
            With my strong problem-solving abilities and attention to detail, I am 
            confident in my ability to tackle complex challenges and deliver high-quality solutions.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default Home