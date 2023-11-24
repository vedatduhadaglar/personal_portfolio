import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-1/4 flex justify-end">
        <div className="hidden w-full md:flex justify-between">
          <Link
            className="nav-link nav-link-fade-up"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={30}
          >
            about me
          </Link>
          <Link
            className="nav-link nav-link-fade-up"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-80}
            duration={30}
          >
            skills
          </Link>
          <Link
            className="nav-link nav-link-fade-up"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={30}
          >
            projects
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNav}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          className={`left-0 right-0 bg-white flex flex-col gap-4 mt-48 pb-12 basis-full items-center absolute`}
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? "0%" : "-100%" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-65}
              duration={300}
              onClick={toggleNav}
            >
              about me
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-65}
              duration={300}
              onClick={toggleNav}
            >
              skills
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-65}
              duration={300}
              onClick={toggleNav}
            >
              projects
            </Link>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default NavBar;
