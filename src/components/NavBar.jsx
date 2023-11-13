import { useState } from "react";
import React from "react";
import { RoughNotation } from "react-rough-notation";

const NavBar = () => {
  return (
    <nav className="bg-white w-full flex flex-wrap justify-between items-center p-6 bg-transparent">
      <h1>VDD</h1>
      <div className="flex gap-8">
        <a>about me</a>
        <a>skills</a>
        <a>more</a>
      </div>
    </nav>
  );
};

export default NavBar;
