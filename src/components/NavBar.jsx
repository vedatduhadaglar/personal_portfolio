import { useState } from "react";
import React from "react";
import { RoughNotation } from "react-rough-notation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-1/4 flex justify-end">
        <div className="hidden w-full md:flex justify-between">
          <a>about me</a>
          <a>skills</a>
          <a>projects</a>
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
        <div className="flex flex-col gap-4 py-4 basis-full items-center z-10">
          <a>about me</a>
          <a>skills</a>
          <a>projects</a>
        </div>
      )}
    </>
  );
};

export default NavBar;
