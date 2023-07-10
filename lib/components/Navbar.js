import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { motion } from "framer-motion";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
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
  return /*#__PURE__*/React.createElement("nav", {
    className: `${styles.paddingX} w-full flex 
    items-center py-5 fixed top-0 z-20 bg-primary ${scrolled ? "bg-primary" : "bg-transparent"}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full flex justify-between items-center max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/",
    className: "flex items-center gap-2",
    onClick: () => {
      setActive(""); // keeps track of where we are currently on the page
      window.scrollTo(0, 0); // scroll to the top of the page when clicked
    }
  }, /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      y: -10,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    },
    transition: {
      duration: 0.8,
      delay: 0.25
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-white text-[18px] font-bold cursor-pointer flex "
  }, "Areej"))), /*#__PURE__*/React.createElement("ul", {
    className: "list-none hidden sm:flex flex-row gap-10"
  }, navLinks.map((nav, index) => /*#__PURE__*/React.createElement("li", {
    key: nav.id,
    className: `${active === nav.title ? "text-white" : "text-secondary"} 
                  font-poppins font-medium cursor-pointer text-[16px]`,
    onClick: () => {
      setToggle(!toggle);
      setActive(nav.title);
    }
  }, /*#__PURE__*/React.createElement(motion.li, {
    initial: {
      y: -10,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    },
    transition: {
      duration: 0.5,
      delay: index * 0.50
    }
  }, " ", /*#__PURE__*/React.createElement("a", {
    href: `#${nav.id}`
  }, " ", nav.title, " ")))), /*#__PURE__*/React.createElement("a", {
    href: "/assets/resume523.pdf",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(motion.button, {
    initial: {
      y: -10,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    },
    transition: {
      duration: 0.5,
      delay: 1.50
    },
    className: " text-secondary font-poppins font-medium cursor-pointer text-[16px]"
  }, "Resume"))), /*#__PURE__*/React.createElement("div", {
    className: "sm:hidden flex flex-1 justify-end items-center"
  }, /*#__PURE__*/React.createElement("img", {
    // handle for mobile devices
    src: toggle ? close : menu,
    alt: "menu",
    className: "w-[28px] h-[28px] object-contain",
    onClick: () => setToggle(!toggle)
  }), /*#__PURE__*/React.createElement("div", {
    className: `${!toggle ? "hidden" : "flex" // if toggle is false, hid it, otherwise show it
    } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`
  }, /*#__PURE__*/React.createElement("ul", {
    className: "list-none flex justify-end items-start flex-1 flex-col gap-4"
  }, navLinks.map(nav => /*#__PURE__*/React.createElement("li", {
    key: nav.id,
    className: `${active === nav.title ? "text-white" : "text-secondary"} 
                  font-poppins font-medium cursor-pointer text-[16px]`,
    onClick: () => {
      setToggle(!toggle);
      setActive(nav.title);
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `#${nav.id}`
  }, " ", nav.title, " "))), /*#__PURE__*/React.createElement("a", {
    href: "/assets/resume523.pdf",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(motion.button, {
    initial: {
      y: -10,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    },
    transition: {
      duration: 0.5,
      delay: 1.50
    },
    className: " text-secondary font-poppins font-medium cursor-pointer text-[16px]"
  }, "Resume")))))));
};
export default Navbar;