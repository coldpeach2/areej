import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { motion } from "framer-motion";

const Navbar = () => {

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex 
    items-center py-5 fixed top-0 z-20 bg-primary ${
      scrolled ? "bg-primary" : "bg-transparent"
    }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'> 
        <Link to="/"
        className='flex items-center gap-2'
        onClick={() => {
          setActive(""); // keeps track of where we are currently on the page
          window.scrollTo(0, 0) // scroll to the top of the page when clicked
        }}>
          <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                >           
                <span className='text-white text-[18px] font-bold cursor-pointer flex '> 
                Areej
                </span>
              </motion.div>

        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
        {navLinks.map((nav, index) => ( 
          <li
                  key={nav.id}
                  className={`${active === nav.title ? "text-white" : "text-secondary"} 
                  font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)}}
                  >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay:  index * 0.50}}
                > <a href={`#${nav.id}`}> {nav.title} </a>
              </motion.li>
              </li>
          ))}
          <a href="/assets/resume523.pdf" target="_blank">
            <motion.button
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 , delay: 1.50 }}
            className=" text-secondary font-poppins font-medium cursor-pointer text-[16px]"
            >
                Resume
            </motion.button>
        </a>
        </ul> 
        <div className='sm:hidden flex flex-1 justify-end items-center'> 
        <img // handle for mobile devices
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${
              !toggle ? "hidden" : "flex" // if toggle is false, hid it, otherwise show it
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => ( 
                  <li
                  key={nav.id}
                  className={`${active === nav.title ? "text-white" : "text-secondary"} 
                  font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)}}
                  >
                    <a href={`#${nav.id}`}> {nav.title} </a>
                  </li>
                ))}
                <a href="/assets/resume523.pdf" target="_blank">
            <motion.button
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 , delay: 1.50 }}
            className=" text-secondary font-poppins font-medium cursor-pointer text-[16px]"
            >
                Resume
            </motion.button>
            </a>

            </ul> 
            </div>
        
        </div>
      </div>
    </nav>
  )
}

export default Navbar