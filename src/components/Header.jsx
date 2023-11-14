import { useState } from "react";
import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="sticky top-0 z-[1] mx-auto bg-white w-full flex flex-wrap justify-between items-center lg:px-24 p-3 lg:p-5 bg-transparent">
      <h1 className="text-black">VDD</h1>
      <NavBar />
    </header>
  );
};

export default Header;
