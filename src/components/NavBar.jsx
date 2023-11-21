import { useState } from "react";
import React from "react";
import { RoughNotation } from "react-rough-notation";
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
                className="w-6 h-6"
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
        <div className="left-0 right-0 bg-white flex flex-col gap-4 mt-48 pb-12 basis-full items-center absolute">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-65}
            duration={30}
            onClick={toggleNav}
          >
            about me
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-65}
            duration={30}
            onClick={toggleNav}
          >
            skills
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-65}
            duration={30}
            onClick={toggleNav}
          >
            projects
          </Link>
        </div>
      )}
    </>
  );
};

export default NavBar;
