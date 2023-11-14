import { useState } from "react";
import React from "react";
import { RoughNotation } from "react-rough-notation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="mx-auto bg-white w-full flex flex-wrap justify-between items-center p-6 bg-transparent">
      <a>VDD</a>
      <div className="menu">
        <ul className="flex items-center gap-8">
          <li>
            <a href="#">about me</a>
          </li>
          <li>
            <a>skills</a>
          </li>
          <li>
            <a>more</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
